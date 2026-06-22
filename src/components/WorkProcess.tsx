import { Sparkles, Activity, FileCheck, Code, Play, CheckCircle } from "lucide-react";
import { workProcessTimeline } from "../data";

export default function WorkProcess() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Visual background decor lines */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-brand-gold/20 via-transparent to-transparent pointer-events-none hidden md:block" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            05 / THE STRATEGIC TIMELINE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Elite Platforms</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-sans mt-3">
            A reliable 7-stage architectural timeline designed to guarantee that expectations are surpassed on every single launch event.
          </p>
        </div>

        {/* Timelines list */}
        <div className="flex flex-col gap-10 relative">
          {workProcessTimeline.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.step}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                
                {/* 1. Left visual description block (5 columns relative to timeline) */}
                <div className={`md:col-span-5 ${isEven ? "md:text-right" : "md:text-left md:order-3"}`}>
                  <div className="flex flex-col md:items-stretch">
                    <span className="text-4xl font-extrabold text-white/5 font-mono mb-2">
                      STEP {step.step}
                    </span>
                    <h3 className="text-lg font-black uppercase text-white tracking-widest font-sans mb-3 group-hover:text-brand-gold">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm mx-auto md:mx-0 inline-block font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* 2. Middle dot milestone (2 columns relative to timeline) */}
                <div className="md:col-span-2 flex items-center justify-center md:order-2">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 bg-[#050505] flex items-center justify-center z-10 shadow-[0_4px_15px_rgba(226,184,87,0.15)] group transition-transform hover:scale-110 duration-300">
                    <span className="text-xs font-mono font-bold text-brand-gold">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* 3. Right deliverables glass block (5 columns relative to timeline) */}
                <div className={`md:col-span-5 ${isEven ? "md:order-3" : "md:order-1"}`}>
                  <div className="glass-panel p-5 rounded-2xl border-white/5 text-left max-w-sm mx-auto md:mx-0">
                    <div className="flex items-center gap-2 mb-2">
                      <FileCheck className="w-4 h-4 text-green-400" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">
                        MILESTONE DELIVERABLE
                      </span>
                    </div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider font-sans">
                      {step.deliverable}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
