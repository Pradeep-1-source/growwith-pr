import { useState } from "react";
import { Sparkles, Brain, Layout, Database, TrendingUp, Cpu } from "lucide-react";
import { skillCategories } from "../data";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Map icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5 text-brand-gold" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-brand-gold" />;
      case "Database":
        return <Database className="w-5 h-5 text-brand-gold" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-brand-gold" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Aurora glow effect */}
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            02 / ENGINEERING POWER
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E2B857] to-[#FCD34D] neon-glow-gold">Skill Stack</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-sans mt-3">
            Grounded inside cognitive research & data systems, mapped with luxury agency-style layouts which convert traffic efficiently.
          </p>
        </div>

        {/* Skill Board Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="glass-panel hover:glass-panel-accent p-8 rounded-[2rem] border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(226,184,87,0.06)] hover:border-brand-gold/15 transition-all duration-400 group"
            >
              {/* Category Title Row */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-blend-screen bg-brand-gold/10 flex items-center justify-center border border-brand-gold/25 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-base font-bold tracking-widest text-white uppercase font-sans">
                  {category.category}
                </h3>
              </div>

              {/* Individual Skill Line Bars */}
              <div className="flex flex-col gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Information Labels */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-[#D4D4D8] uppercase tracking-wider font-mono">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-brand-gold font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Slider Bar */}
                    <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden relative">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                          transform: `scaleX(${hoveredSkill === skill.name ? 1 : 0})`,
                          transformOrigin: "left",
                        }}
                      />
                      {/* Invisible default static bar when not hovered to guarantee visibility */}
                      <div
                        className="absolute inset-0 bg-brand-gold/30 rounded-full transition-all duration-500 origin-left"
                        style={{
                          width: `${skill.level}%`,
                          zIndex: hoveredSkill === skill.name ? -1 : 1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
