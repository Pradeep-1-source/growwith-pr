import { GraduationCap, Award, Compass, Sparkles, User, MapPin, Mail, Send } from "lucide-react";
import { aboutText } from "../data";
import pradeepProfile from "../assets/images/pradeep_profile_new.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Grid overlay accent */}
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="mb-14 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            01 / BIOGRAPHY & PROFILE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Core Architect & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2B857] to-[#FCD34D] neon-glow-gold">
              Growth Strategist
            </span>
          </h2>
        </div>

        {/* About Main Bento Layout Grid - Balanced 12 Column System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Elegant Portrait Profile Card (4 columns) */}
          <div className="lg:col-span-4 relative group">
            {/* Ambient gold glow backing */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-gold/30 via-brand-gold-dark/10 to-transparent rounded-[2rem] filter blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative glass-panel hover:glass-panel-accent h-full p-4 rounded-[2rem] border-white/5 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
              {/* Photo representation */}
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-square border border-white/10">
                <img
                  src={pradeepProfile}
                  alt="Pradeep S Biography Picture"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.01] scale-100 group-hover:scale-[1.03] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Micro tech indicators */}
                <div className="absolute bottom-3 left-3 bg-black/75 border border-brand-gold/30 px-2 py-1 rounded text-[8px] tracking-widest font-mono text-brand-gold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  India Mapped
                </div>
              </div>

              {/* Identity & quick links below photo */}
              <div className="mt-4 flex flex-col gap-1 px-1">
                <h3 className="text-lg font-black tracking-wider text-white uppercase font-sans">
                  PRADEEP S
                </h3>
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-mono font-bold leading-none">
                  Full Stack & AI Architect
                </span>
                
                {/* Custom Quick list */}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5 text-[10px] text-neutral-400 font-sans">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Chennai, Tamil Nadu, IN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="truncate">pradeepshanmugavel01@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Main Strategic Journey Texts & Bio Core (5 columns) */}
          <div className="lg:col-span-5 glass-panel-accent p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between border-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-5 h-5 text-brand-gold animate-spin-slow" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] font-mono text-white">
                  Biography & Vision
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-white/90 font-sans font-semibold leading-relaxed mb-4">
                {aboutText.main}
              </p>
              
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                {aboutText.sub}
              </p>
            </div>

            {/* Academic baseline micro record */}
            <div className="pt-4 border-t border-white/5 flex flex-col">
              <span className="text-[9px] text-[#A1A1AA] uppercase tracking-widest font-mono font-bold">
                Speciality Focus
              </span>
              <span className="text-xs font-extrabold text-brand-gold uppercase font-sans mt-1">
                High-Performance Growth Systems
              </span>
            </div>
          </div>

          {/* Column 3: Specialized Stack & Academy Outline (3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
            {/* Academics micro details */}
            <div className="glass-panel p-6 rounded-[1.5rem] border-white/5">
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-brand-gold" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] font-mono text-white">
                  Academics
                </h3>
              </div>
              <p className="text-[11px] text-[#A1A1AA] leading-relaxed font-sans font-medium">
                Pursuing AI & Data Science engineering. Applying cognitive systems, advanced databases and algorithms directly to maximize business landing rate index.
              </p>
            </div>

            {/* Core Competencies panel */}
            <div className="glass-panel p-6 rounded-[1.5rem] border-white/5 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <Award className="w-5 h-5 text-brand-gold" />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] font-mono text-white">
                    Core Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {aboutText.specialties.slice(0, 10).map((spec) => (
                    <span
                      key={spec}
                      className="text-[8px] font-bold uppercase tracking-wider font-mono text-brand-gold bg-brand-gold/5 py-1 px-2 rounded-md border border-brand-gold/15"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 w-full py-2.5 rounded-xl border border-[#E2B857]/20 hover:border-[#E2B857]/60 text-[9px] tracking-widest uppercase font-mono text-center text-white hover:text-brand-gold transition-colors block"
              >
                Inquire Bio Desk ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
