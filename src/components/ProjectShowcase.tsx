import { useState, useEffect } from "react";
import { Sparkles, Globe, Laptop, Smartphone, ExternalLink, ArrowRight, Loader2, Play, ChevronRight, Check, ShoppingCart, Search, Heart, ShieldCheck, Mail, Zap, TrendingUp, BarChart3, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clientProjects } from "../data";
import { ClientProject, CaseStudy } from "../types";
import CaseStudyModal from "./CaseStudyModal";

function ProjectMockupScreen({ projectId, isMobile = false }: { projectId: string; isMobile?: boolean }) {
  // Renders a stunning, high-fidelity responsive Tailwind-styled preview page tailored to this client project!
  // Fast loading, zero layout shifting, and completely accurate branding colors.
  
  if (projectId === "project-01") {
    // Zynors Tech Solutions (IT Company)
    return (
      <div className="w-full h-full bg-[#050508] text-white p-2.5 sm:p-4 flex flex-col justify-between font-sans relative overflow-hidden">
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#3b82f6]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa]" />
            <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-[#3b82f6]">ZYNORS</span>
          </div>
          <div className="flex items-center gap-2 text-[6px] sm:text-[8px] text-neutral-400">
            <span>Solutions</span>
            <span>Cloud</span>
            <span>Consulting</span>
          </div>
        </div>

        <div className="relative z-10 my-auto flex flex-col gap-1.5 py-4 max-w-[240px]">
          <span className="text-[5px] sm:text-[7px] text-[#3b82f6] font-mono tracking-widest uppercase font-bold flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Next-Gen Cloud Portals
          </span>
          <h4 className="text-[10px] sm:text-base font-black tracking-tight leading-tight uppercase text-neutral-100">
            Enterprise Cloud Solutions & Code Architecture
          </h4>
          {!isMobile && (
            <p className="text-[7px] sm:text-[10px] text-neutral-400 leading-relaxed">
              We engineer ultra-secure system normalizations, distributed database schemas, and responsive modular storefront applications.
            </p>
          )}
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="text-[5px] sm:text-[7px] bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 py-0.5 px-1.5 rounded font-mono font-bold">SERVERLESS DB</span>
            <span className="text-[5px] sm:text-[7px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-1.5 rounded font-mono font-bold">99.9% LIVE</span>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>PORTAL STATS: SECURE</span>
          <span>© 2026 ZYNORS TECH</span>
        </div>
      </div>
    );
  }

  if (projectId === "project-02") {
    // Decor Station (Luxury Home Decor)
    return (
      <div className="w-full h-full bg-[#0E0C0A] text-[#F3F4F6] p-2.5 sm:p-4 flex flex-col justify-between font-sans relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#b45309]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center justify-between border-b border-[#b45309]/10 pb-2">
          <span className="text-[8px] sm:text-[10px] font-extrabold tracking-widest text-brand-gold">DECOR STATION</span>
          <span className="text-[6px] sm:text-[8px] text-neutral-400 font-serif">Living Space</span>
        </div>

        <div className="my-auto grid grid-cols-4 gap-3 items-center">
          <div className="col-span-2.5 flex flex-col gap-1">
            <span className="text-[4px] sm:text-[6px] text-brand-gold font-mono tracking-widest uppercase font-black">AMBIPOR EXTRA COLLECTION</span>
            <h4 className="text-[9px] sm:text-sm font-serif font-black tracking-wide leading-tight uppercase text-neutral-100">
              The Lounge Teak Chair
            </h4>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[9px] sm:text-xs font-bold text-white">₹24,500</span>
              <span className="text-[5px] sm:text-[7px] text-neutral-500 line-through">₹36,000</span>
            </div>
            {!isMobile && (
              <p className="text-[6px] sm:text-[8px] text-neutral-400 leading-snug">
                Custom teak structures padded with lightweight aesthetic woven ropes.
              </p>
            )}
            <button className="bg-brand-gold text-neutral-950 text-[5px] sm:text-[8px] font-bold uppercase py-1 px-2.5 rounded-full w-max mt-1 hover:bg-white transition-colors flex items-center gap-1">
              <ShoppingCart className="w-2 h-2" /> Buy Collection
            </button>
          </div>
          <div className="col-span-1.5 aspect-square rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-center p-2 relative">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-brand-gold">
              <path d="M 20 70 L 40 70 L 40 45 L 20 45 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M 30 70 L 30 90 M 50 70 L 50 90" stroke="currentColor" strokeWidth="4" />
              <path d="M 40 55 L 65 45 L 80 50" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
        </div>

        <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>TEAK & CRAFT INDEX</span>
          <span>CART (0)</span>
        </div>
      </div>
    );
  }

  if (projectId === "project-04") {
    // AK Medias (Marketing Agency)
    return (
      <div className="w-full h-full bg-[#09050C] text-white p-2.5 sm:p-4 flex flex-col justify-between font-sans relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ec4899]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#ec4899]/10 pb-2">
          <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-[#ec4899]">AK MEDIAS</span>
          <div className="flex items-center gap-1.5 text-[5px] sm:text-[7px] text-neutral-400">
            <span>Our Works</span>
            <span>Funnel Blueprint</span>
          </div>
        </div>

        <div className="my-auto flex flex-col gap-1.5 py-2">
          <span className="text-[5px] sm:text-[7px] text-[#ec4899] font-mono tracking-widest uppercase font-bold flex items-center gap-1">
            <Zap className="w-2 h-2" /> CONVERSION CONSOLE ACTIVE
          </span>
          <h4 className="text-[10px] sm:text-base font-black tracking-tight leading-tight uppercase">
            Scaling Brands With Sophisticated Ad Flow Funnels.
          </h4>
          
          <div className="grid grid-cols-3 gap-1 mt-1 sm:mt-2">
            <div className="bg-neutral-900/60 border border-white/5 rounded p-1 sm:p-1.5 text-center">
              <span className="text-[4px] sm:text-[6px] block text-neutral-500 uppercase font-mono">Meta Pixel</span>
              <span className="text-[8px] sm:text-xs font-black text-emerald-400">99.8% OK</span>
            </div>
            <div className="bg-neutral-900/60 border border-[#ec4899]/20 rounded p-1 sm:p-1.5 text-center">
              <span className="text-[4px] sm:text-[6px] block text-neutral-500 uppercase font-mono">Conversion ROAS</span>
              <span className="text-[8px] sm:text-xs font-black text-[#ec4899]">5.8x Avg</span>
            </div>
            <div className="bg-neutral-900/60 border border-white/5 rounded p-1 sm:p-1.5 text-center">
              <span className="text-[4px] sm:text-[6px] block text-neutral-500 uppercase font-mono">Cost Per Lead</span>
              <span className="text-[8px] sm:text-xs font-black text-white">-45% drop</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>META MARKETING PARTNER</span>
          <span>INR FUNNELS ACTIVE</span>
        </div>
      </div>
    );
  }

  if (projectId === "project-05") {
    // Big Town (Electronics mobile marketplace)
    return (
      <div className="w-full h-full bg-[#050B08] text-[#E0E7FF] p-2.5 sm:p-4 flex flex-col justify-between font-sans relative">
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#10b981]/15 pb-2">
          <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-[#10b981]">BIG TOWN MOBILE</span>
          <span className="text-[6px] sm:text-[8px] text-neutral-400">Chennai Hub</span>
        </div>

        <div className="my-auto flex flex-col gap-1 font-sans">
          <div className="flex items-center justify-between bg-black/60 border border-white/5 rounded-md px-2 py-1 text-[5px] sm:text-[8px] text-neutral-500 mb-1">
            <span>Search mobile devices, gadgets, smart watches...</span>
            <Search className="w-2 h-2 text-neutral-500" />
          </div>
          
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-[#0b1410] border border-[#10b981]/10 rounded-lg p-1.5 sm:p-2 flex items-center justify-between">
              <div>
                <span className="text-[4px] sm:text-[6px] text-[#10b981] block font-mono">APPLE DEVICES</span>
                <span className="text-[7px] sm:text-[10px] font-bold text-white">iPhone 15 Pro Max</span>
              </div>
              <span className="text-[6px] sm:text-[9px] text-[#10b981] font-black shrink-0">₹1,14,000</span>
            </div>
            <div className="bg-[#0b1410] border border-[#10b981]/10 rounded-lg p-1.5 sm:p-2 flex items-center justify-between">
              <div>
                <span className="text-[4px] sm:text-[6px] text-[#10b981] block font-mono">SAMSUNG LAB</span>
                <span className="text-[7px] sm:text-[10px] font-bold text-white">Galaxy S24 Ultra</span>
              </div>
              <span className="text-[6px] sm:text-[9px] text-[#10b981] font-black shrink-0">₹1,24,000</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>CHOOSE DEVICE FILTERS</span>
          <span>DEALS ACTIVE</span>
        </div>
      </div>
    );
  }

  if (projectId === "project-06") {
    // ZK Clothes (Fashion clothing storefront)
    return (
      <div className="w-full h-full bg-[#08070A] text-white p-2.5 sm:p-4 flex flex-col justify-between font-sans relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#6366f1]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#6366f1]/15 pb-2">
          <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-[#6366f1]">ZK CLOTHES</span>
          <span className="text-[5px] sm:text-[8px] text-neutral-400 font-mono uppercase bg-[#6366f1]/10 text-[#6366f1] px-1.5 rounded-sm">Summer '26</span>
        </div>

        <div className="my-auto text-center flex flex-col gap-0.5 max-w-sm mx-auto">
          <span className="text-[4px] sm:text-[6px] text-[#6366f1] tracking-[0.25em] font-mono font-extrabold uppercase mb-0.5">EXQUISITE DROP INC.</span>
          <h4 className="text-[10px] sm:text-base font-black tracking-tight uppercase leading-none italic text-neutral-100">
            LUXURY OVERSIZED HOODIES
          </h4>
          {!isMobile && (
            <p className="text-[6px] sm:text-[9px] text-neutral-400 max-w-xs mx-auto leading-snug mt-1">
              Handcrafted premium fits, heavyweight cotton textures and aesthetic digital embroidery designs.
            </p>
          )}
          <button className="bg-[#6366f1] hover:bg-white hover:text-[#050510] text-[#050510] text-[5px] sm:text-[8px] font-bold uppercase py-1 px-3.5 rounded-full w-max mx-auto mt-2.5 transition-colors tracking-widest">
            Explore Apparel
          </button>
        </div>

        <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>FREE SHIPPING INTNL</span>
          <span>CART (1)</span>
        </div>
      </div>
    );
  }

  if (projectId === "project-07") {
    // Gift Kadai (Personalized Photo Gifts)
    return (
      <div className="w-full h-full bg-[#0D0507] text-[#FFFFFF] p-2.5 sm:p-4 flex flex-col justify-between font-sans relative">
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-[#f43f5e]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#f43f5e]/15 pb-2">
          <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-[#f43f5e]">GIFT KADAI</span>
          <span className="text-[6px] sm:text-[8px] text-[#f43f5e] font-bold uppercase tracking-widest">PERSONAL STORE</span>
        </div>

        <div className="my-auto flex flex-col gap-1 items-center text-center">
          <span className="text-[4px] sm:text-[6px] text-neutral-500 uppercase tracking-widest font-mono font-bold">YOUR OWN PICTURE ON ENGRAVED ACRYLIC</span>
          <h4 className="text-[10px] sm:text-base font-extrabold tracking-tight max-w-sm uppercase text-neutral-100">
            Laser-Carved 3D LED Frames & Personalized Keepsakes
          </h4>
          
          <div className="w-32 sm:w-44 h-10 sm:h-14 border border-dashed border-[#f43f5e]/20 rounded-lg flex flex-col items-center justify-center bg-[#150a0c]/60 mt-1 cursor-pointer hover:border-[#f43f5e]/50 transition-colors">
            <span className="text-[5px] sm:text-[8px] font-bold text-[#f43f5e] uppercase tracking-widest">&#43; CHOOSE DESIGN IMAGE</span>
            <span className="text-[3px] sm:text-[5px] text-neutral-600 uppercase mt-0.5">Supports high-res PNG, JPG vectors</span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>24HR TAMIL NADU SHIPPINGS</span>
          <span>100% SECURE CHECKOUT</span>
        </div>
      </div>
    );
  }

  if (projectId === "project-08") {
    // Baby's World & Gifts (Kids boutique items)
    return (
      <div className="w-full h-full bg-[#050D0C] text-[#FFFFFF] p-2.5 sm:p-4 flex flex-col justify-between font-sans relative">
        <div className="bg-[#06b6d4]/5 absolute inset-0 rounded-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#06b6d4]/15 pb-2">
          <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-[#06b6d4]">BABY'S WORLD</span>
          <span className="text-[6px] sm:text-[8px] text-[#A1A1AA] uppercase">TOYS COLLECTION</span>
        </div>

        <div className="my-auto grid grid-cols-2 gap-2 sm:gap-3">
          <div className="bg-neutral-900/60 border border-white/5 p-1.5 sm:p-2 rounded-xl flex flex-col justify-between hover:border-[#06b6d4]/20 transition-all">
            <div>
              <span className="text-[4px] sm:text-[6px] text-neutral-500 font-mono block">SOFT PLUSH PLAYS</span>
              <span className="text-[7px] sm:text-[10px] font-black block text-neutral-100 leading-tight">Fluffy Giraffe Toy</span>
            </div>
            <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/5">
              <span className="text-[6px] sm:text-[9px] text-[#06b6d4] font-black">₹1,499</span>
              <span className="text-[4px] sm:text-[6px] bg-[#06b6d4]/10 text-[#06b6d4] px-1 rounded">HOT</span>
            </div>
          </div>
          
          <div className="bg-neutral-900/60 border border-white/5 p-1.5 sm:p-2 rounded-xl flex flex-col justify-between hover:border-[#06b6d4]/20 transition-all">
            <div>
              <span className="text-[4px] sm:text-[6px] text-neutral-500 font-mono block">EDUCATION MAT</span>
              <span className="text-[7px] sm:text-[10px] font-black block text-neutral-100 leading-tight">Wooden Shapes Board</span>
            </div>
            <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/5">
              <span className="text-[6px] sm:text-[9px] text-[#06b6d4] font-black">₹1,899</span>
              <span className="text-[4px] sm:text-[6px] bg-emerald-400/10 text-emerald-400 px-1 rounded">SAFE</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[5px] sm:text-[8px] text-neutral-500 font-mono">
          <span>NON-TOXIC CERTIFIED</span>
          <span>EASY RETURNS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-neutral-950 flex items-center justify-center text-white text-[10px]">
      Mock Display Screen
    </div>
  );
}

interface ProjectMetaState {
  title: string;
  description: string;
  favicon: string;
  screenshot: string;
  colors: string[];
  loading: boolean;
  error: boolean;
}

export default function ProjectShowcase() {
  const [projectMetaData, setProjectMetaData] = useState<Record<string, ProjectMetaState>>({});
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);

  // Load real-time metadata for projects on component mount
  useEffect(() => {
    clientProjects.forEach(async (project) => {
      // Setup initial loading state
      setProjectMetaData(prev => ({
        ...prev,
        [project.id]: {
          title: project.displayName,
          description: "Fetching premium enterprise catalogs...",
          favicon: `https://www.google.com/s2/favicons?domain=${project.domain}&sz=64`,
          screenshot: "",
          colors: project.colors,
          loading: true,
          error: false,
        }
      }));

      try {
        const response = await fetch(`/api/project-meta?url=${encodeURIComponent(project.url)}`);
        if (!response.ok) throw new Error("Fetch metadata failed");
        const json = await response.json();
        
        setProjectMetaData(prev => ({
          ...prev,
          [project.id]: {
            title: json.title || project.displayName,
            description: json.description || "A luxury digital showcase.",
            favicon: json.favicon,
            screenshot: json.screenshot,
            colors: json.colors || project.colors,
            loading: false,
            error: false
          }
        }));
      } catch (err) {
        // Safe fallback on slow internet or sandbox limits
        setProjectMetaData(prev => ({
          ...prev,
          [project.id]: {
            title: project.displayName,
            description: `${project.industry} designed with bespoke UI optimization, lightning-fast animations and mobile responsiveness index of 100%.`,
            favicon: `https://www.google.com/s2/favicons?domain=${project.domain}&sz=64`,
            screenshot: `https://api.microlink.io?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`,
            colors: project.colors,
            loading: false,
            error: true
          }
        }));
      }
    });
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background vector circles */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              04 / ELITE PORTFOLIO
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
              Case Studies of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Live Client Work</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-sans">
            Real products developed for physical businesses, fully integrated with analytics, direct target pixels, and performance-tuned hosting environments.
          </p>
        </div>

        {/* Dynamic Project Cards Loop */}
        <div className="flex flex-col gap-16 md:gap-24">
          {clientProjects.map((project, idx) => {
            const meta = projectMetaData[project.id] || {
              title: project.displayName,
              description: "Loading live site preview...",
              favicon: "",
              screenshot: "",
              colors: project.colors,
              loading: true,
              error: false
            };

            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                
                {/* 1. Visual Laptop / Mobile Device Mockup Column (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} relative`}>
                  
                  {/* Subtle color glow based on index metadata */}
                  <div 
                    className="absolute inset-0 filter blur-[90px] opacity-10 rounded-full" 
                    style={{ backgroundColor: meta.colors[0] || "#E2B857" }}
                  />

                  {/* Complete Laptop Wrapper Mockup (Framer-style crisp vector lines) */}
                  <div className="relative mx-auto max-w-[500px] lg:max-w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] group">
                    <div className="relative rounded-[1.5rem] bg-neutral-900 p-2 sm:p-3 border border-white/10 overflow-hidden backdrop-blur-3xl">
                      
                      {/* Laptop Screen Bezel Header */}
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#121214] rounded-t-xl border-b border-white/5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        
                        {/* Domain text bar */}
                        <div className="ml-4 bg-black/50 border border-white/5 py-0.5 px-4 rounded text-[9px] text-[#A1A1AA] font-mono tracking-wider flex items-center gap-1.5 select-all pointer-events-auto cursor-help truncate max-w-xs">
                          <Globe className="w-2.5 h-2.5 text-neutral-500 shrink-0 animate-spin-slow" />
                          {project.domain}
                        </div>
                      </div>

                      {/* Display Screen */}
                      <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden rounded-b-xl">
                        <ProjectMockupScreen projectId={project.id} isMobile={false} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* 2. Overlapping Fluid Mobile Mockup Frame (Ultra luxury frame) */}
                    <div className="absolute -bottom-6 -right-4 sm:-right-8 w-[110px] sm:w-[150px] aspect-[9/19] bg-neutral-900 border border-white/15 p-1 rounded-[1.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-10 transition-transform duration-300 hover:scale-105">
                      <div className="w-full h-full bg-neutral-950 rounded-[1.2rem] overflow-hidden relative">
                        {/* Dynamic camera notch circle */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-3.5 bg-neutral-900 border border-white/5 rounded-full z-20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#09090b] rounded-full" />
                        </div>
                        
                        <ProjectMockupScreen projectId={project.id} isMobile={true} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2. Text Content & Description Column (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}>
                  
                  {/* Top outline index heading with favicon */}
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-3">
                      {meta.favicon && (
                        <img 
                          src={meta.favicon} 
                          alt="site favicon"
                          className="w-5 h-5 object-contain rounded-md"
                        />
                      )}
                      <span className="text-xs uppercase font-mono tracking-widest font-black text-brand-gold">
                        0{project.number} / {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Project Brand Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-sans mb-3">
                    {project.displayName}
                  </h3>

                  {/* Project description snippet */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-sans">
                    {meta.description}
                  </p>

                  {/* Key Architecture Tags List */}
                  <div className="flex flex-wrap gap-2 mb-8 select-none">
                    {project.tech.map((term) => (
                      <span
                        key={term}
                        className="text-[9px] font-bold uppercase tracking-widest font-mono text-[#D4D4D8] bg-[#121214] border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons - Visit Website & Open Case Study popup modal */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Live Website Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-[#050505] bg-gradient-to-r from-[#E2B857] to-[#FCD34D] cursor-pointer hover:scale-[1.03] transition-all duration-300"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Visit Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* View Premium Details / Case Study popup modal */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group border border-white/10 hover:border-brand-gold/30 hover:bg-brand-gold/5 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-[#D4D4D8] hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Show Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study details slideover/popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            meta={projectMetaData[selectedProject.id] || {
              title: selectedProject.displayName,
              description: "",
              favicon: "",
              screenshot: "",
              colors: selectedProject.colors,
              loading: false,
              error: false
            }}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
