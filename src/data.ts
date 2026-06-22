import { 
  Service, 
  ClientProject, 
  Testimonial, 
  Certification, 
  WorkProcessStep, 
  SkillCategory 
} from "./types";

export const brandName = "GrowWith PR";

export const heroTitles = [
  "Digital Marketing Expert",
  "Full Stack Web Developer",
  "AI Developer",
  "E-commerce Specialist"
];

export const aboutText = {
  main: "Motivated AI & Data Science student and Premium Full Stack Developer passionate about designing ultra-high-converting digital experiences and bespoke engineering solutions.",
  sub: "I bridge the gap between heavy computer science and conversion-driven digital marketing. By combining high-performance React/Next architectures with automated AI intelligence, premium aesthetic user interfaces, and sophisticated Meta Facebook structure, I construct growth systems that turn clicks into clients.",
  specialties: [
    "AI", "Web Development", "Digital Marketing", "Meta Ads", "SEO", 
    "WordPress", "Shopify", "Supabase", "Python", "Java", "SQL", 
    "React", "Next.js", "Tailwind CSS"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Data Science",
    iconName: "Brain",
    skills: [
      { name: "Gemini / OpenAI API", level: 96 },
      { name: "Python Models", level: 88 },
      { name: "Supervised Learning", level: 85 },
      { name: "Automations & Bots", level: 94 }
    ]
  },
  {
    category: "Frontend Architecture",
    iconName: "Layout",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion Animation", level: 92 },
      { name: "TypeScript Module Safety", level: 90 }
    ]
  },
  {
    category: "Backend & System Design",
    iconName: "Database",
    skills: [
      { name: "Node.js (Express)", level: 92 },
      { name: "SQL Databases (Postgres)", level: 86 },
      { name: "Headless CMS & APIs", level: 90 },
      { name: "Supabase & Firebase", level: 88 }
    ]
  },
  {
    category: "Growth & Digital Marketing",
    iconName: "TrendingUp",
    skills: [
      { name: "Facebook Meta Ads Target", level: 95 },
      { name: "Technical SEO Optimization", level: 90 },
      { name: "E-commerce Funnel Building", level: 94 },
      { name: "WordPress & Shopify Dev", level: 93 }
    ]
  }
];

export const services: Service[] = [
  {
    id: "premium-web",
    title: "Premium Website Development",
    iconName: "Monitor",
    description: "Designing corporate profiles and business products with elegant, high-performance static frameworks and dynamic state animations that command class.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    id: "ecommerce-dev",
    title: "E-commerce Development",
    iconName: "ShoppingBag",
    description: "Architecting custom, lightning-fast Shopify themes, WordPress systems, or custom headless React storefronts with highly integrated payment and inventory pipelines.",
    tags: ["Shopify", "WordPress", "Supabase", "Custom Checkout"]
  },
  {
    id: "seo-opt",
    title: "SEO Optimization",
    iconName: "Search",
    description: "Technical SEO audits, semantic HTML refactorings, automated sitemaps schema configurations, and content strategies that guarantee ranking in top results.",
    tags: ["SEO Audit", "Lighthouse Rank", "JSON-LD Schema", "Sitemaps"]
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook/Instagram)",
    iconName: "Target",
    description: "Building end-to-end modern marketing funnel setups. Pixel configurations, API conversions, demographic testing matrices, and high-CTR copywriting.",
    tags: ["Facebook Ads", "API Conversion", "Lookalike Audiences", "A/B Testing"]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions Integration",
    iconName: "Bot",
    description: "Integrating intelligent agents, real-time chatbots, dynamic response generation modules, and algorithmic matching into existing corporate apps.",
    tags: ["Google GenAI", "Gemini API", "Intelligent Chat", "OCR"]
  },
  {
    id: "biz-automation",
    title: "Business Process Automation",
    iconName: "Zap",
    description: "Eliminating manual client management. Creating automated WhatsApp, email sequences, CRM updates, and transaction dispatch alerts on action.",
    tags: ["Zapier", "Webhooks", "Node Automation", "Google Sheets"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages & Copy",
    iconName: "Sparkles",
    description: "Hyper-focused single-purpose landing pages constructed with direct-response psychological patterns designed and coded for maximum visual click density.",
    tags: ["Framer", "Direct Response", "Mobile First", "Visual Contrast"]
  },
  {
    id: "ui-ux-design",
    title: "UI UX Elegant Design",
    iconName: "Figma",
    description: "Converting brand guides into flawless digital wireframes. Fluid responsive design, accessible contrast grids, dark/cyber aesthetic layout boards.",
    tags: ["Figma Wireframes", "Grid Systems", "Luxury Contrast", "Mood Boards"]
  }
];

export const clientProjects: ClientProject[] = [
  {
    id: "project-01",
    number: "01",
    domain: "zynors-tech-solution-six.vercel.app",
    url: "https://zynors-tech-solution-six.vercel.app/",
    industry: "IT Company Website",
    displayName: "Zynors Tech Solutions",
    colors: ["#3b82f6", "#1d4ed8"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Ready"]
  },
  {
    id: "project-02",
    number: "02",
    domain: "decorstationstore.in",
    url: "https://decorstationstore.in",
    industry: "Home Decor Store",
    displayName: "Decor Station",
    colors: ["#b45309", "#78350f"],
    tech: ["E-commerce", "Liquid Architecture", "Cart optimization", "Shopify Setup"]
  },
  {
    id: "project-04",
    number: "03",
    domain: "akmedias.in",
    url: "https://akmedias.in",
    industry: "Digital Marketing Agency",
    displayName: "AK Medias",
    colors: ["#ec4899", "#be185d"],
    tech: ["Tailwind", "Motion Animations", "Conversion Copy", "Analytics Hub"]
  },
  {
    id: "project-05",
    number: "04",
    domain: "bigtown.in",
    url: "https://bigtown.in",
    industry: "Electronics & Mobile Store",
    displayName: "Big Town",
    colors: ["#10b981", "#047857"],
    tech: ["Business Catalog", "Interactive UI", "Navigation Schema", "SEO Blueprint"]
  },
  {
    id: "project-06",
    number: "05",
    domain: "zkclothes.in",
    url: "https://zkclothes.in",
    industry: "Fashion E-commerce",
    displayName: "ZK Clothes",
    colors: ["#6366f1", "#4f46e5"],
    tech: ["Shopify E-commerce", "Premium Theme Layout", "Dynamic Filters", "Mobile Speed Check"]
  },
  {
    id: "project-07",
    number: "06",
    domain: "giftkadai.co.in",
    url: "https://giftkadai.co.in",
    industry: "Personalized Gift Store",
    displayName: "Gift Kadai",
    colors: ["#f43f5e", "#e11d48"],
    tech: ["Dynamic Personalization Engine", "Custom Input Uploads", "Fast Gateway", "Shopify Dev"]
  },
  {
    id: "project-08",
    number: "07",
    domain: "babysworldandgifts.in",
    url: "https://babysworldandgifts.in",
    industry: "Kids & Gift Store",
    displayName: "Baby's World & Gifts",
    colors: ["#06b6d4", "#0891b2"],
    tech: ["Clean Grid", "Visual Category Tree", "Optimized Core Vitals", "Brand Showcase"]
  }
];

export const workProcessTimeline: WorkProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep research into the brand, competitors, objectives, and customer demographics to extract unique marketing angles.",
    deliverable: "Competitive Analysis & UX Strategy Document"
  },
  {
    step: "02",
    title: "Planning",
    description: "Constructing user flows, site architectures, system integrations mapping and conversion funnel flow charts.",
    deliverable: "Interactive Site Architecture & Tech Stack selection"
  },
  {
    step: "03",
    title: "UI UX Design",
    description: "Generating bespoke dark & premium aesthetic high-fidelity wireframes in Figma with precise typography pairings.",
    deliverable: "Complete Desktop/Mobile Figma Design Specs"
  },
  {
    step: "04",
    title: "Development",
    description: "Writing clean, type-safe React/Next code with optimized Tailwind configurations, Framer Motion transitions, and DB queries.",
    deliverable: "Stage Environment Sandbox Build Link"
  },
  {
    step: "05",
    title: "Testing",
    description: "Stress testing across 12 mobile viewports, auditing Lighthouse metrics, and validating form pipelines & checkout flows.",
    deliverable: "95+ Score Lighthouse Performance Audit Report"
  },
  {
    step: "06",
    title: "Deployment",
    description: "Publishing to ultra-fast CDN cloud clusters (Vercel, AWS S3, or Cloud Run) mapped under optimal domain caching schemas.",
    deliverable: "Production Launch & Domain DNS Configurations"
  },
  {
    step: "07",
    title: "Lifetime Support",
    description: "Providing ongoing security system updates, core engine checks, speed monitoring, and quarterly marketing conversion consulting.",
    deliverable: "Strategic Maintenance Portal & SLA Support"
  }
];

export const whyChooseMe = [
  {
    title: "Fast Delivery",
    iconName: "Zap",
    description: "Engineered inside rapid agile sprint models ensuring premium websites are complete without unnecessary corporate delay."
  },
  {
    title: "Premium Bespoke UI",
    iconName: "Award",
    description: "Zero generic templates. Visuals are carefully designed from blank canvases to deliver immediate client trust and authority."
  },
  {
    title: "SEO First Architecture",
    iconName: "Search",
    description: "Clean semantic HTML structures with JSON-LD tags, fast loading speeds, and sitemap indexing right out of the box."
  },
  {
    title: "Mobile First Design",
    iconName: "Smartphone",
    description: "Crafted specifically for the sensory demands of modern mobile clients, with pristine navigation layout and 44px+ touch targets."
  },
  {
    title: "Scalable Clean Code",
    iconName: "Cpu",
    description: "Type-safe, highly modular TypeScript architecture mapped to modern coding standards that allow your applet to grow seamlessly."
  },
  {
    title: "Modern Technologies",
    iconName: "Code",
    description: "Leveraging the speed index of React 19, Tailwind CSS, Framer Motion, and scalable Edge servers to optimize runtime performance."
  },
  {
    title: "Lifetime Elite Support",
    iconName: "HeartHandshake",
    description: "We never launch and disappear. I provide robust support and conversion optimizing reviews to ensure you keep scaling."
  }
];

export const statistics = [
  { label: "Live Client Websites", value: "8+" },
  { label: "Completed Projects", value: "20+" },
  { label: "Mobile-Responsive Index", value: "100%" },
  { label: "Lighthouse Performance", value: "95+" }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Shanmuga Vel",
    role: "Managing Director",
    company: "Zynors Tech Solutions",
    text: "Pradeep is a rare developer who understands business growth as much as coding. He rebuilt our entire IT services site with beautiful dark gradients and premium micro-interactions, leading to an immediate flow of direct agency client requests! Absolute genius in digital marketing automation.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Vignesh Kumar",
    role: "Founder & Lead Curator",
    company: "Decor Station",
    text: "Our Shopify site was slow and did not match our offline design aesthetics. Pradeep totally redesigned it, optimization of our cart speed, and configure the Meta ads conversions API. Our direct ad attribution is now crystal clear, and conversion rates spiked by 48% within three weeks!",
    rating: 5
  },
  {
    id: "test-3",
    name: "Aparna S.",
    role: "E-commerce Director",
    company: "ZK Clothes",
    text: "Pradeep transformed our digital store. He has an incredibly high standard for design - everything feels premium like Framer or Apple. Mobile navigation flows elegantly, and configuring complex products feels simple for users. Excellent developer!",
    rating: 5
  },
  {
    id: "test-4",
    name: "Karthik Raja",
    role: "COO",
    company: "Big Town Devices",
    text: "Very few developers can deliver a high-quality product as fast as Pradeep. He completed our brand catalog web application before the expected deadline with custom search filters, 100% mobile accessibility, and clear SEO rankings.",
    rating: 5
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Cloud Computing Mastery & Architecture",
    issuer: "Learnathon Ecosystem",
    date: "2025",
    category: "Cloud"
  },
  {
    id: "cert-2",
    title: "AI Revolution in Cyber Security Summit - Special Delegate",
    issuer: "Cybersecurity Consortium India",
    date: "2025",
    category: "AI & Security"
  },
  {
    id: "cert-3",
    title: "Full Stack Development & Data Science Internship",
    issuer: "AICTE - Government Ministry of Education",
    date: "2024",
    category: "Software"
  },
  {
    id: "cert-4",
    title: "National LEVEL Project Expo Outstanding Design Winner",
    issuer: "Technical Project Expo Committee",
    date: "2024",
    category: "Innovation"
  },
  {
    id: "cert-5",
    title: "Advanced Machine Learning Model Research Presentation",
    issuer: "Symposium Paper Presentation Panel",
    date: "2024",
    category: "Research"
  }
];
