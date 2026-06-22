import React, { useState } from "react";
import { Sparkles, Phone, Mail, Instagram, Linkedin, Send, AlertCircle, CheckCircle2, Loader2, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ status: "success" | "error" | null; msg: string }>({
    status: null,
    msg: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({
        status: "error",
        msg: "Please fill in the required name, email and message fields."
      });
      return;
    }

    setSubmitting(true);
    setFeedback({ status: null, msg: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Failed to submit request.");

      setFeedback({
        status: "success",
        msg: json.message || "Your request was received by Pradeep! We will connect in a short while."
      });
      // Clear form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setFeedback({
        status: "error",
        msg: err.message || "Message dispatch failed. Please try again or direct call/email Pradeep S."
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold font-mono font-bold mb-3 flex items-center justify-center gap-1.5 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            10 / COLLABORATION ENGINE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-gold-light neon-glow-gold">Amazing Together</span>
          </h2>
        </div>

        {/* Contact Layout Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left direct contact details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            
            {/* Contact cards */}
            <div className="flex flex-col gap-6">
              
              {/* Phone card */}
              <a
                href="tel:7305053083"
                className="glass-panel hover:glass-panel-accent p-6 rounded-3xl border-white/5 flex items-center gap-4 group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-[#E2B857]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest text-[#A1A1AA] uppercase font-bold">
                    Direct Phone Line
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white hover:text-brand-gold-light transition-colors mt-0.5 font-sans">
                    +91 7305053083
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:pradeepshanmugavel01@gmail.com"
                className="glass-panel hover:glass-panel-accent p-6 rounded-3xl border-white/5 flex items-center gap-4 group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-[#E2B857]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-[9px] font-mono tracking-widest text-[#A1A1AA] uppercase font-bold">
                    Official Email Mailbox
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white hover:text-brand-gold-light transition-colors mt-0.5 truncate font-sans">
                    pradeepshanmugavel01@gmail.com
                  </span>
                </div>
              </a>

              {/* Social Channels row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/growwith.pr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel hover:glass-panel-accent p-5 rounded-2xl border-white/5 flex items-center gap-3.5 group transition-all"
                >
                  <Instagram className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-all shrink-0" />
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 group-hover:text-white uppercase font-sans truncate">
                    Instagram
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pradeep-s-125b04300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel hover:glass-panel-accent p-5 rounded-2xl border-white/5 flex items-center gap-3.5 group transition-all"
                >
                  <Linkedin className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-all shrink-0" />
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 group-hover:text-white uppercase font-sans truncate">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Custom Styled Monochromatic Dark Google Map Embed */}
            <div className="glass-panel p-3.5 rounded-[2rem] border-white/5 h-[230px] w-full overflow-hidden relative shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
              <div className="absolute top-4 left-4 z-10 bg-[#050505]/85 border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2 select-all font-sans">
                <MapPin className="w-4 h-4 text-brand-gold animate-bounce" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Chennai, Tamil Nadu, IN
                </span>
              </div>
              
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865391325!2d80.11053006456079!3d13.047525287612716!2m3!1f0!2f0!3f0!3m2!1i1024!2i763!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none rounded-2xl brightness-90 contrast-105 filter grayscale invert hover:filter-none transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right message inquiry form panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-accent border-[#E2B857]/15 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-3xl relative h-full flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] font-mono text-brand-gold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Direct Inquiry Desk
                </h3>

                {/* Row 1: Name & email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold font-mono text-[#D4D4D8] uppercase tracking-wider">
                      Your Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Shanmuga Vel"
                      required
                      className="w-full bg-[#111115]/80 border border-white/5 focus:border-[#E2B857]/45 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold font-mono text-[#D4D4D8] uppercase tracking-wider">
                      Business Email <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      required
                      className="w-full bg-[#111115]/80 border border-white/5 focus:border-[#E2B857]/45 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium"
                    />
                  </div>
                </div>

                {/* Option Row: Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold font-mono text-[#D4D4D8] uppercase tracking-wider">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 7305053083"
                    className="w-full bg-[#111115]/80 border border-white/5 focus:border-[#E2B857]/45 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium"
                  />
                </div>

                {/* Input 3: Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold font-mono text-[#D4D4D8] uppercase tracking-wider">
                    Detailed Message <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your design specifications, required features and timeline projections..."
                    required
                    className="w-full bg-[#111115]/80 border border-white/5 focus:border-[#E2B857]/45 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium resize-none min-h-[120px]"
                  />
                </div>

                {/* Handle submission feedback alerts */}
                <AnimatePresence mode="wait">
                  {feedback.status && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={`py-3.5 px-4 rounded-xl flex items-start gap-2.5 text-xs font-semibold leading-relaxed ${
                        feedback.status === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {feedback.status === "success" ? (
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0" />
                      )}
                      <span>{feedback.msg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dynamic Submission CTA Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-[#050505] bg-gradient-to-r from-[#E2B857] via-[#FCD34D] to-[#E2B857] flex items-center justify-center gap-2 hover:scale-[1.015] focus:scale-100 transition-all cursor-pointer shadow-[0_4px_22px_rgba(226,184,87,0.35)]"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-[#050505] animate-spin" />
                      SUBMITTING REQ...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#050505]" />
                      SEND DISPATCH ENQUIRY
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
