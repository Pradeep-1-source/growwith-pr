import { Heart, Sparkles, ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import GrowWithPRLogo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-16 pb-12 overflow-hidden select-none">
      {/* Decorative dot matrix */}
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col justify-between">
        
        {/* Upper Foot Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-10 mb-8 items-start">
          
          {/* Brand Info Left Block (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <GrowWithPRLogo className="w-10 h-10" glow={true} />
              <div className="flex flex-col">
                <span className="font-extrabold text-[#F8FAFC] tracking-widest text-sm font-sans uppercase">
                  GROWWITH <span className="text-brand-gold">PR</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.30em] text-[#A1A1AA] font-mono leading-none mt-0.5">
                  DIGITAL GROWTH EXPERT
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm font-sans font-medium mt-2">
              Engineering ultra-high-converting, responsive business portals and automated systems styled with luxury interfaces that build immediately recognized digital authority.
            </p>
          </div>

          {/* Quick Links Middle Block (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {/* Services */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-black">
                SERVICES
              </span>
              <a href="#services" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                Web Development
              </a>
              <a href="#services" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                E-commerce
              </a>
              <a href="#services" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                Meta Ads
              </a>
              <a href="#services" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                SEO Audit
              </a>
            </div>

            {/* Quick sections */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-black">
                SECTIONS
              </span>
              <a href="#about" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                Biography
              </a>
              <a href="#projects" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                Portfolios
              </a>
              <a href="#process" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                Timeline Process
              </a>
              <a href="#certifications" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
                Credentials
              </a>
            </div>
          </div>

          {/* Direct Social Block Right (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4 md:items-end">
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-black">
              CONNECT ONLINE
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/growwith.pr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/5 hover:border-[#E2B857]/45 bg-neutral-900 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-colors shrink-0 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/pradeep-s-125b04300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/5 hover:border-[#E2B857]/45 bg-neutral-900 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-colors shrink-0 cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:pradeepshanmugavel01@gmail.com"
                className="w-9 h-9 border border-white/5 hover:border-[#E2B857]/45 bg-neutral-900 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-colors shrink-0 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 border border-white/10 hover:border-[#E2B857]/45 bg-neutral-900/50 hover:bg-neutral-900 text-xs text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer select-none"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5 animate-pulse text-brand-gold" />
            </button>
          </div>

        </div>

        {/* Lower copyright row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left font-mono text-[9px] text-[#A1A1AA] uppercase">
          <div>
            &copy; {currentYear} GROWWITH PR. ALL RIGHTS EXCELLENTLY RESERVED.
          </div>
          <div className="flex items-center gap-1">
            <span>DESIGNED & DEVELOPED WITH</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse mt-0.5" />
            <span>BY</span>
            <a href="#" className="font-extrabold text-white underline decoration-brand-gold decoration-2">
              PRADEEP S
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
