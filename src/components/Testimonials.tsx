import { useState } from "react";
import { Sparkles, MessageSquareQuote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 select-none">
        
        {/* Section Heading */}
        <div className="mb-14 sm:mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-1.5 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            07 / RECOMMENDATION DIARIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Endorsements</span>
          </h2>
        </div>

        {/* Testimonial Glass Slide Card */}
        <div className="glass-panel-accent border-[#E2B857]/15 p-8 sm:p-12 rounded-[2.5rem] relative shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[320px]">
          
          {/* Top aesthetic quotes logo */}
          <div className="flex items-center justify-between mb-6">
            <MessageSquareQuote className="w-12 h-12 text-[#E2B857] opacity-65" />
            <div className="flex items-center gap-1">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
          </div>

          {/* Core recommendation text */}
          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans font-medium mb-8">
            "{active.text}"
          </p>

          {/* Client Author Row details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-sm font-extrabold text-white tracking-wider uppercase font-sans">
                {active.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#E2B857] font-mono mt-0.5 uppercase">
                {active.role} &mdash; {active.company}
              </span>
            </div>

            {/* Slider Switch Controller buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-gold/45 bg-neutral-900/50 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-gold/45 bg-neutral-900/50 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom index indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === i ? "w-6 bg-brand-gold" : "w-1.5 bg-neutral-800"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
