import { Sparkles, Zap, Award, Search, Smartphone, Cpu, Code, HeartHandshake } from "lucide-react";
import { whyChooseMe } from "../data";

export default function WhyChooseMe() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-gold animate-bounce" />;
      case "Award":
        return <Award className="w-6 h-6 text-brand-gold" />;
      case "Search":
        return <Search className="w-6 h-6 text-brand-gold" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-brand-gold" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-brand-gold" />;
      case "Code":
        return <Code className="w-6 h-6 text-brand-gold" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-brand-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section id="why-me" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-brand-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            06 / BUSINESS COMPETENCIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Why Clients Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">GrowWith PR</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-sans mt-3">
            An uncompromising standard toward detail and speed designed to deliver long-term scalable growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseMe.map((item) => (
            <div
              key={item.title}
              className="glass-panel hover:glass-panel-accent p-8 rounded-3xl border-white/5 transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_24px_rgba(0,0,0,0.55)] flex flex-col gap-5 select-none"
            >
              {/* Icon Bubble */}
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center">
                {getIcon(item.iconName)}
              </div>

              {/* Text Highlights */}
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-white font-sans mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
