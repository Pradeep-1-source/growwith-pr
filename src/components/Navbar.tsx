import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import growLogo from "../assets/images/growwithpr_logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Why Me", href: "#why-me" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 sm:px-12 py-4 ${
          scrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-3" 
            : "bg-transparent py-6"
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-gold/15 blur-lg rounded-full" />
              <img 
                src={growLogo} 
                alt="GrowWith PR Logo" 
                className="relative w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(226,184,87,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(226,184,87,0.8)] transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#F8FAFC] tracking-widest text-sm font-sans uppercase">
                GROWWITH <span className="text-brand-gold group-hover:neon-glow-gold transition-all duration-300">PR</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#A1A1AA] font-mono leading-none mt-0.5">
                DIGITAL ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 bg-neutral-900/40 border border-white/5 rounded-full px-8 py-2.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4D4D8] hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#resume-cv"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#resume-cv");
              }}
              className="text-xs uppercase tracking-widest font-mono text-[#E4E4E7] hover:text-brand-gold transition-colors"
            >
              Resume preview
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="relative text-xs font-bold uppercase tracking-[0.18em] text-[#050505] bg-brand-gold hover:bg-brand-gold-light px-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(226,184,87,0.35)] transition-all duration-300 font-sans flex items-center gap-1.5 cursor-pointer hover:scale-[1.03]"
            >
              Hire Me
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-neutral-950 text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#050505] pt-24 px-8 pb-12 flex flex-col justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Spotlights */}
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 mt-6">
              <div className="h-[1px] bg-white/5 w-full mb-2" />
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-bold uppercase tracking-[0.2em] text-left text-[#E4E4E7] hover:text-brand-gold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <span className="text-brand-gold font-mono text-sm mr-3 font-normal">0{idx + 1}</span>
                  {link.name}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#resume-cv"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#resume-cv");
                }}
                className="w-full text-center border border-white/10 hover:border-brand-gold/30 rounded-full py-3.5 text-xs uppercase tracking-widest font-mono text-[#D4D4D8]"
              >
                PREVIEW RESUME
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-brand-gold text-[#050505] rounded-full py-4 text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-1.5"
              >
                HIRE ME NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
