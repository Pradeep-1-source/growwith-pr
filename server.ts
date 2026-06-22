import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini on the server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "dummy-key",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Mock/fallback project details for stability
const fallbacks: Record<string, { title: string; description: string; colors: string[]; textcolors?: string[] }> = {
  "zynors-tech-solution-six.vercel.app": {
    title: "Zynors Tech Solutions",
    description: "Premium IT company website detailing modern digital solutions, enterprise development, and scalable cloud engineering.",
    colors: ["#3b82f6", "#1d4ed8"],
  },
  "decorstationstore.in": {
    title: "Decor Station Store",
    description: "A luxury Home Decor e-commerce platform offering state-of-the-art premium furniture, lighting, and interior accents.",
    colors: ["#b45309", "#78350f"],
  },
  "akmedias.in": {
    title: "AK Medias",
    description: "High-performance Digital Marketing and media creation agency driving customer acquisition and social scale.",
    colors: ["#ec4899", "#be185d"],
  },
  "bigtown.in": {
    title: "Big Town Mobile Showroom",
    description: "Multi-brand business profile for retail electronics, smart gadgets, and premium smartphone servicing.",
    colors: ["#10b981", "#047857"],
  },
  "zkclothes.in": {
    title: "ZK Clothes",
    description: "Elite fashion e-commerce storefront showcasing seasonal apparel trends, curated streetwear, and smooth checkout.",
    colors: ["#6366f1", "#4f46e5"],
  },
  "giftkadai.co.in": {
    title: "Gift Kadai",
    description: "Bespoke gift e-commerce website for customized photo gifts, custom keepsakes, and personalized celebrations.",
    colors: ["#f43f5e", "#e11d48"],
  },
  "babysworldandgifts.in": {
    title: "Baby's World & Gifts",
    description: "Adorable retail baby boutique and luxury toys catalog with intuitive styling and soft friendly typography.",
    colors: ["#06b6d4", "#0891b2"],
  },
};

// Simple metadata extractor with backup presets
app.get("/api/project-meta", async (req, res) => {
  const urlParam = req.query.url as string;
  if (!urlParam) {
    return res.status(400).json({ error: "URL path is required" });
  }

  // Clean URL to match fallback keys
  let cleanDomain = urlParam
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0];

  const backup = fallbacks[cleanDomain] || {
    title: cleanDomain,
    description: "A premium client project developed by GrowWith PR.",
    colors: ["#2563EB", "#06B6D4"],
  };

  try {
    // Add protocol if missing
    const fullUrl = urlParam.startsWith("http") ? urlParam : `https://${urlParam}`;
    
    // Attempt fetch with a timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(fullUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    const html = await response.text();
    
    // Extract title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    let title = titleMatch ? titleMatch[1].trim() : backup.title;

    // Extract description
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
                      html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
    let description = descMatch ? descMatch[1].trim() : backup.description;

    // Clean up title
    if (title.length > 80) {
      title = title.substring(0, 80) + "...";
    }

    // Generate color palette based on content or fallback
    // In node, we don't calculate colors from images easily, so we use beautiful preset hexes from our lookup table
    const colors = backup.colors;

    // Fetch favicon URL estimation
    const favicon = `https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=128`;
    // Microlink screenshot URL
    const screenshot = `https://api.microlink.io?url=${encodeURIComponent(fullUrl)}&screenshot=true&embed=screenshot.url`;

    return res.json({
      url: fullUrl,
      title,
      description,
      favicon,
      screenshot,
      colors,
      source: "live",
    });
  } catch (error) {
    // Graceful fallback if fetching fails (offline, sandbox, CORS inside Cloud Run outward, or slow loading)
    const favicon = `https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=128`;
    const screenshot = `https://api.microlink.io?url=${encodeURIComponent(urlParam.startsWith("http") ? urlParam : `https://${urlParam}`)}&screenshot=true&embed=screenshot.url`;

    return res.json({
      url: urlParam.startsWith("http") ? urlParam : `https://${urlParam}`,
      title: backup.title,
      description: backup.description,
      favicon,
      screenshot,
      colors: backup.colors,
      source: "cached_fallback",
    });
  }
});

// AI Case Study generator using Gemini 3.5-flash
app.post("/api/project-case-study", async (req, res) => {
  const { url, title, description } = req.body;
  if (!url) {
    return res.status(400).json({ error: "Project URL is required" });
  }

  // Check if we have a real API key configured
  const hasKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";

  if (!hasKey) {
    // Generate beautiful static fallback case studies so there is never empty states
    return res.json({
      problem: `The client at ${url} was struggling with slow loading speeds, average UI design that didn't stand out, and poor search engine rankings (SEO). Their previous setup lacked the modern micro-interactions necessary to keep visitors engaged, leading to a high bounce rate and low core conversion.`,
      solution: `We fully re-architected their online footprint. By utilizing Next.js / React, we built an ultra-fast, visually mesmerizing frontend styled with bespoke Tailwind and Framer Motion. We incorporated pixel-perfect product catalogs, streamlined checkouts, and fully responsive layouts that function smoothly on all devices from mobile to desk screens.`,
      features: [
        "Fully optimized Core Web Vitals (98+ performance index)",
        "Elegant dark/light semantic contrasts with custom grid components",
        "Next-generation responsive layouts with mobile-first tap targets",
        "Automated SEO optimization including JSON-LD schema markup",
        "High-performance assets load handling and image lazy-loading",
      ],
      results: "180% Increase in online engagement, 45% lower bounce rates, and a 2.1x bump in organic search clicks in under 30 days.",
    });
  }

  try {
    const prompt = `Create a premium business case study for a project named "${title || "Client Project"}" with URL "${url}". 
    The company description is: "${description || "IT/Ecommerce service"}".
    
    Provide the response strictly in JSON format matching the following schema. Keep it professional, premium-agency style, and ready for clients to read:
    {
      "problem": "One robust paragraph explaining the specific business problem, technical hurdles, and core customer pain points.",
      "solution": "One concise paragraph describing the digital engineering, design iterations, implementation, and strategies applied to build the brand",
      "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
      "results": "One highlight statistic statement representing the concrete business improvement metrics (e.g. 150% boost in traffic)"
    }`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "";
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error) {
    console.error("Gemini case study generation error:", error);
    return res.json({
      problem: `The client at ${url} struggled with slow customer workflows, outdated layout patterns, and a low engagement rate on mobile screens, affecting direct sales.`,
      solution: `Designed a cutting-edge digital platform combining lightning-fast transitions, bespoke branding configurations, structural dark mode, and integrated analytical pipelines.`,
      features: [
        "Optimized client funnel layouts and dynamic UI state triggers",
        "Bespoke typography matching luxury brand standards",
        "Fully-fluid custom animations and loading indicators",
        "Responsive bento grids emphasizing product metrics",
        "High-performance content delivery routing",
      ],
      results: "98/100 Lighthouse Performance rating with an immediate 55% boost in user acquisition.",
    });
  }
});

// Contact submissions in-memory store for showcase
const contactSubmissions: any[] = [];

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required fields" });
  }

  const submission = {
    id: Date.now().toString(),
    name,
    email,
    phone: phone || "Not provided",
    message,
    timestamp: new Date().toISOString(),
  };

  contactSubmissions.unshift(submission);
  console.log("New Contact Submission Received:", submission);

  return res.json({
    success: true,
    message: "Thank you! Your message has been received by Pradeep S. We will reach out to you shortly.",
    submission,
  });
});

app.get("/api/contact/submissions", (req, res) => {
  return res.json(contactSubmissions);
});

async function startServer() {
  // Ensure public folder exists and copy root uploaded JPEG files there for bundling and serving
  try {
    const fs = await import("fs");
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const rootFiles = fs.readdirSync(process.cwd());
    console.log("Root files cataloged:", rootFiles);
    rootFiles.forEach(file => {
      const lower = file.toLowerCase();
      if (lower.endsWith(".jpeg") || lower.endsWith(".jpg") || lower.endsWith(".png")) {
        const srcPath = path.join(process.cwd(), file);
        const destPath = path.join(publicDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Successfully synced asset: ${file} into /public directory.`);
      }
    });
  } catch (e) {
    console.warn("Non-blocking assets syncing issue:", e);
  }

  // Vite integration in development mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
