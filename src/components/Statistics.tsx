import { Sparkles, Trophy, Users, Layers, MonitorCheck } from "lucide-react";
import { statistics } from "../data";

export default function Statistics() {
  const getIcon = (label: string) => {
    switch (label) {
      case "Live Client Websites":
        return <Layers className="w-5 h-5 text-brand-gold animate-bounce" />;
      case "Completed Projects":
        return <Trophy className="w-5 h-5 text-brand-gold" />;
      case "Mobile-Responsive Index":
        return <MonitorCheck className="w-5 h-5 text-brand-gold" />;
      default:
        return <Users className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <section id="statistics" className="py-20 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel p-6 sm:p-8 rounded-[2rem] border-white/5 flex flex-col items-center text-center shadow-[0_10px_25px_rgba(0,0,0,0.55)] group hover:border-[#E2B857]/30 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-4 group-hover:bg-brand-gold/25 transition-colors">
                {getIcon(stat.label)}
              </div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light tracking-tighter neon-glow-gold-strong leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#A1A1AA] uppercase font-mono max-w-[140px] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
