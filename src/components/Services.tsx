import { 
  Sparkles, Monitor, ShoppingBag, Search, Target, Bot, Zap, Sparkle, Figma, ArrowUpRight 
} from "lucide-react";
import { services } from "../data";

export default function Services() {
  // Mapping service icons based on names
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return <Monitor className="w-6 h-6 text-brand-gold" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-brand-gold" />;
      case "Search":
        return <Search className="w-6 h-6 text-brand-gold" />;
      case "Target":
        return <Target className="w-6 h-6 text-brand-gold" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-brand-gold" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-gold" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-brand-gold" />;
      case "Figma":
        return <Figma className="w-6 h-6 text-brand-gold" />;
      default:
        return <Sparkle className="w-6 h-6 text-brand-gold" />;
    }
  };

  const scrollToContact = () => {
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background spotlights & meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-dark to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header heading text */}
        <div className="mb-16 sm:mb-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-1.5 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            03 / BUSINESS CATALYSTS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Growth Vectors</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-sans mt-3">
            Premium products custom engineered from wireframes to high-converting production servers that grow businesses.
          </p>
        </div>

        {/* 8 Services Layout Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, index) => (
            <div
              key={srv.id}
              onClick={scrollToContact}
              className="group glass-panel hover:glass-panel-accent p-6 rounded-3xl border-white/5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.5)] cursor-pointer relative overflow-hidden"
            >
              {/* Card visual ambient background lines */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-all duration-500" />
              
              <div>
                {/* Visual Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-gold/45 transition-all duration-300">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 group-hover:text-brand-gold/90 transition-colors">
                    [0{index + 1}]
                  </span>
                </div>

                {/* Service Metadata details */}
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-3 font-sans group-hover:text-brand-gold transition-colors duration-200">
                  {srv.title}
                </h3>
                
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 group-hover:text-[#D4D4D8] transition-colors duration-300">
                  {srv.description}
                </p>
              </div>

              {/* Tag Cloud Row info */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {srv.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-bold uppercase tracking-wider font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-2" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
