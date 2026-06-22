import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Award, ChevronRight, FileDown, Layers, MousePointer, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { heroTitles, aboutText } from "../data";
import pradeepProfile from "../assets/images/pradeep_profile_new.jpg";

export default function Hero() {
  const [activeTitleIdx, setActiveTitleIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title carousel loop
    const timer = setInterval(() => {
      setActiveTitleIdx((prev) => (prev + 1) % heroTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[105vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-12 md:px-20 overflow-hidden cursor-default"
    >
      {/* Dynamic Mouse Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-45 blur-[120px] transition-all duration-300 hidden md:block"
        style={{
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: "radial-gradient(circle, rgba(226, 184, 87, 0.12) 0%, rgba(226, 184, 87, 0) 70%)",
        }}
      />

      {/* Kinetic Animated Gold Auroral Gradients (Bespoke Luxury Background) */}
      <div className="absolute inset-0 select-none overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[25%] -left-[10%] w-[60%] h-[60%] bg-brand-gold/10 rounded-full blur-[140px] animate-aurora-gold-light" />
        <div className="absolute top-[40%] -right-[20%] w-[55%] h-[55%] bg-brand-gold-dark/5 rounded-full blur-[150px] animate-aurora-gold-dark" />
        {/* Premium purple accent — echoes the neon backdrop in profile photo */}
        <div className="absolute top-[10%] right-[5%] w-[35%] h-[45%] rounded-full blur-[130px] opacity-30" style={{ background: "radial-gradient(circle, rgba(160,80,220,0.18) 0%, transparent 70%)" }} />
        
        {/* Subtle dot matrices and overlays */}
        <div className="absolute inset-0 dot-matrix opacity-[0.25]" />
        <div className="absolute inset-0 grid-overlay opacity-[0.3]" />
        
        {/* Sleek bottom dark fading vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Hero Left Content Column (7 cols on large desktop) */}
        <div className="lg:col-span-7 flex flex-col xl:pr-8">
          
          {/* Top Pill Accent */}
          <motion.div
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-8 hover:border-brand-gold/40 transition-all duration-300 pointer-events-auto cursor-pointer"
            onClick={() => scrollToSection("#why-me")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              GrowWith PR Logo Color Theme Applied
            </span>
            <ChevronRight className="w-3 h-3 text-brand-gold/60" />
          </motion.div>

          {/* Dynamic Headline Text */}
          <div className="relative mb-6">
            <motion.p
              className="text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase text-[#A1A1AA] font-mono leading-none mb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Hi, I'm Pradeep S
            </motion.p>

            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-2 font-sans">
              Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E2B857] to-[#FCD34D] neon-glow-gold select-all">
                Digital Scale.
              </span>
            </h1>

            {/* Scrolling Subheadings */}
            <div className="h-12 relative overflow-hidden mt-3 mb-6">
              {heroTitles.map((title, i) => (
                <motion.div
                  key={title}
                  className="absolute left-0 right-0 text-xl sm:text-2xl font-bold tracking-wide flex items-center gap-3 text-brand-gold uppercase"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: activeTitleIdx === i ? 0 : activeTitleIdx === (i + 1) % heroTitles.length ? -50 : 50,
                    opacity: activeTitleIdx === i ? 1 : 0
                  }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Award className="w-5.5 h-5.5 text-brand-gold/80 animate-pulse shrink-0" />
                  {title}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subheading text explanation */}
          <motion.p
            className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed max-w-lg mb-10 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {aboutText.main} {aboutText.sub.substring(0, 116)}...
          </motion.p>

          {/* Core Action CTA Buttons Widget (Download Resume ALWAYS VISIBLE) */}
          <motion.div
            className="flex flex-wrap items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Primary Action Button - Resume Attachment (Saves space & Always Visible) */}
            <a
              href="#resume-cv"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#resume-cv");
              }}
              className="group relative inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs text-[#050505] bg-gradient-to-r from-[#E2B857] via-[#FCD34D] to-[#E2B857] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_4px_30px_rgba(226,184,87,0.35)] cursor-pointer hover:scale-[1.03]"
            >
              <FileDown className="w-4 h-4 text-[#050505] animate-bounce" />
              Download Resume
            </a>

            {/* Secondary Option: Projects Navigation Link */}
            <button
              onClick={() => scrollToSection("#projects")}
              className="group border border-white/10 hover:border-brand-gold/40 hover:bg-brand-gold/5 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>View My Projects</span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Direct Hire Section Request Form */}
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-[#A1A1AA] hover:text-brand-gold hover:underline transition-colors font-mono text-xs uppercase tracking-widest py-2 px-1 cursor-pointer flex items-center gap-1.5"
            >
              Hire Me
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </motion.div>
        </div>

        {/* Hero Right Column - Profile Visual Showcase (5 cols on large desktop) */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
          
          {/* Cinematic Gold Glow Orb Backdrop */}
          <div className="absolute w-72 h-72 bg-brand-gold rounded-full filter blur-[100px] opacity-15 animate-pulse mix-blend-screen pointer-events-none" />

          {/* Luxury Frame Container */}
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient gold rings floating behind portrait card */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-gold via-purple-500/30 to-white/10 rounded-[2.5rem] filter blur-md opacity-40" />

            {/* Inner Golden Profile Frame Card */}
            <div className="relative rounded-[2.2rem] overflow-hidden glass-panel-accent border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-2xl group transition-transform duration-500 hover:scale-[1.015]">
              
              {/* Image Frame Wrapper */}
              <div className="relative rounded-[1.6rem] overflow-hidden bg-neutral-950 aspect-square">
                
                {/* Genuine Profile Picture rendered from workspace source */}
                <img
                  src={pradeepProfile}
                  alt="Pradeep S"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[1.02] scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />

                {/* Golden Overlay Veil on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-gold/5 to-transparent pointer-events-none" />
                
                {/* Geometric overlay styling tags */}
                <div className="absolute top-4 right-4 py-1 px-3 bg-black/70 backdrop-blur-md rounded-md border border-brand-gold/30 flex items-center gap-1.5 select-none text-[8px] font-bold tracking-widest text-brand-gold uppercase">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping" />
                  AVAILABLE TO HIRE
                </div>

                {/* Subtitle tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase font-sans">
                      PRADEEP SHANMUGAVEL
                    </span>
                    <span className="text-[8px] font-semibold text-brand-gold uppercase tracking-widest font-mono mt-0.5">
                      Co-founder & Full-Stack Architect
                    </span>
                  </div>
                  <Layers className="w-4 h-4 text-brand-gold animate-bounce" />
                </div>
              </div>
            </div>

            {/* Aesthetic Mini Stats Widgets floating in empty margins */}
            <motion.div
              className="absolute -top-4 -left-6 bg-black/75 backdrop-blur-md p-3.5 rounded-2xl border border-brand-gold/20 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-white leading-none">8+ LIVE</span>
                <span className="text-[8px] tracking-wider text-[#A1A1AA] uppercase font-mono mt-0.5">
                  Client Platforms
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-6 bg-black/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <MousePointer className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-white leading-none">95+</span>
                <span className="text-[8px] tracking-wider text-[#A1A1AA] uppercase font-mono mt-0.5">
                  Lighthouse score
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
