import { Sparkles, Calendar, Award, GraduationCap, Trophy, Globe, BookOpen } from "lucide-react";
import { certifications } from "../data";

export default function Certifications() {
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case "cert-1":
        return <Globe className="w-6 h-6 text-brand-gold" />;
      case "cert-2":
        return <Award className="w-6 h-6 text-brand-gold animate-pulse" />;
      case "cert-3":
        return <GraduationCap className="w-6 h-6 text-brand-gold" />;
      case "cert-4":
        return <Trophy className="w-6 h-6 text-brand-gold" />;
      default:
        return <BookOpen className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dot-matrix opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            08 / ENDORSED CREDENTIALS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Certifications</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-sans mt-3">
            Academic achievements, government sponsorships, and verified awards representing professional software design leadership.
          </p>
        </div>

        {/* Certifications Grid listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group glass-panel hover:glass-panel-accent p-6 rounded-3xl border-transparent hover:border-[#E2B857]/20 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(226,184,87,0.05)] flex items-start gap-4 hover:-translate-y-1 select-none"
            >
              {/* Badge Icon bubble */}
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/15 transition-all duration-300">
                {getBadgeIcon(cert.id)}
              </div>

              {/* Text descriptions */}
              <div className="flex flex-col flex-grow">
                <span className="text-[9px] font-mono tracking-widest text-[#E2B857] uppercase font-bold mb-1">
                  {cert.category}
                </span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase leading-snug tracking-wide text-white font-sans mb-2 group-hover:text-brand-gold transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-[#A1A1AA] font-mono uppercase mt-auto">
                  <span>{cert.issuer}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                    {cert.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
