import React, { useState } from "react";
import { Sparkles, FileText, FileDown, BookOpen, Clock, Code2, Check, ArrowRight, View, Mail, Phone, MapPin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ResumeSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const triggerDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    
    // Create a mock resume download document
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(
      `RESUME - PRADEEP S - FULL STACK & AI WEB ARCHITECT
Phone: +91 7305053083
Email: pradeepshanmugavel01@gmail.com
Location: India
Website: https://zynors-tech-solution-six.vercel.app/
LinkedIn: https://www.linkedin.com/in/pradeep-s-125b04300

SKILLSETS
- AI Models Research, Google Gemini GenAI SDK, Python Algorithms, Supabase Model Maps
- Full Stack Engineering, React/Next, Vite TypeScript modules, Node, Express, PostgreSQL
- Technical SEO Optimization, Custom Shopify cart liquid modifications, WordPress setups
- Digital Marketing campaign funnels, Meta Ads conversion APIs integration, Copywriting-A/B testings

ACADEMICS
AI & Data Science engineering student of computing and database architectures.

CERTIFICATIONS INCLUDE
- Cloud Computing Engineering by Learnathon
- Cyber Security Summit by Cybersecurity India
- Full Stack & Software Development government internship by Ministry of Education (AICTE)`
    );
    link.download = "Pradeep_S_Resume_GrowWithPR.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="resume-cv" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
            09 / HUMAN CAPITAL
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Vitae</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto font-sans mt-3">
            Preview my work records, academic background, and core technologies, or download the copy below.
          </p>
        </div>

        {/* Resume Content Layout (Dual column block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl border-white/5">
              <FileText className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-base font-extrabold uppercase tracking-widest text-white font-sans mb-3">
                Professional Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans mb-6">
                Analyzing, structuring, and launching modern high-converting applications requiring robust type-safe code standards and high-performing marketing funnels.
              </p>

              {/* Always Visible Primary CTA Trigger */}
              <button
                onClick={triggerDownload}
                className="w-full relative px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-[#050505] bg-gradient-to-r from-[#E2B857] via-[#FCD34D] to-[#E2B857] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(226,184,87,0.3)] cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-green-950 animate-bounce" />
                    DOWNLOADED OK!
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-[#050505]" />
                    DOWNLOAD RESUME
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Premium Resume Sheet Container (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[2.5rem] bg-[#0A0A0B] border border-white/5 p-8 sm:p-12 shadow-[0_25px_50px_rgba(0,0,0,0.8)] outline-[#E2B857]/5 outline select-text">
              
              {/* Sheet Watermark */}
              <div className="absolute top-10 right-10 opacity-5 pointer-events-none select-none">
                <FileText className="w-64 h-64 text-brand-gold" />
              </div>

              {/* Sheet Header details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/5 mb-8">
                <div className="flex flex-col">
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase font-sans">
                    PRADEEP S
                  </h4>
                  <span className="text-[10px] tracking-widest text-brand-gold font-mono uppercase mt-1">
                    Full-Stack Software Architecture & Digital Marketer
                  </span>
                </div>

                {/* Micro contact card labels */}
                <div className="flex flex-col gap-1.5 font-mono text-[10px] text-[#A1A1AA] uppercase">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-gold/80" />
                    <span>pradeepshanmugavel01@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-gold/80" />
                    <span>+91 7305053083</span>
                  </div>
                </div>
              </div>

              {/* Sheet Sections */}
              <div className="flex flex-col gap-8">
                
                {/* 1. Academic path */}
                <div>
                  <h5 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    01 / ACADEMICS
                  </h5>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h6 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider font-sans">
                        AI & DATA SCIENCE ENGINEERING STUDENT
                      </h6>
                      <span className="text-[10px] text-neutral-500 font-mono mt-0.5 uppercase block">
                        Government recognized technology curriculum
                      </span>
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-neutral-400 bg-neutral-900 border border-white/5 py-0.5 px-3 rounded uppercase shrink-0">
                      Pursuing
                    </span>
                  </div>
                </div>

                {/* 2. Key Accomplishments history */}
                <div>
                  <h5 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    02 / CAREER HIGHLIGHTS
                  </h5>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <h6 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider font-sans">
                        Founder & Principal engineer &mdash; GrowWith PR
                      </h6>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans font-medium mt-1">
                        Developing enterprise websites and automated marketing funnels for 8+ live clients. Engineered robust conversion APIs integration and direct pixel setup to scale user tracking models.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h6 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider font-sans">
                        Government Full Stack Engineering Internship &mdash; AICTE MHED
                      </h6>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans font-medium mt-1">
                        Completed advanced training on neural-net modeling, database normalization strategies, and modular UI framework construction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Skill Matrices list */}
                <div>
                  <h5 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    03 / CORE COMPETENCY INDEX
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js / React", "Vite UI Development", "Tailwind CSS", "Framer Motion Animations",
                      "Node.js & Express API Routes", "SQL (Postgres & MySQL)", "NoSQL databases", "Supabase authentication",
                      "Facebook Meta Ads Manager", "Google Ads", "WordPress Theme development", "Shopify Liquid templates", "Python AI logic"
                    ].map((tok) => (
                      <span
                        key={tok}
                        className="text-[9px] font-bold uppercase tracking-wider font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded"
                      >
                        {tok}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
