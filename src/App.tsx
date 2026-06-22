import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import ProjectShowcase from "./components/ProjectShowcase";
import WorkProcess from "./components/WorkProcess";
import WhyChooseMe from "./components/WhyChooseMe";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* 1. Cinematic Luxury Intro Loading Screen */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* 2. Portfolio Experience (Fade in when loading complete) */}
      <AnimatePresence>
        {loadingComplete && (
          <motion.div
            id="experience-canvas"
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Nav Banner header bar */}
            <Navbar />

            {/* Scrolling Core Container blocks */}
            <main className="relative">
              {/* Luxury Fullscreen Hero spotlight */}
              <Hero />

              {/* Bento profile description */}
              <About />

              {/* Skills and metric gauges */}
              <Skills />

              {/* Services cards grid */}
              <Services />

              {/* Combined quantitative results panel */}
              <Statistics />

              {/* High-fidelity client portfolios with device overlays */}
              <ProjectShowcase />

              {/* Strategic 7-stage roadmap timelines */}
              <WorkProcess />

              {/* Trust validation details list */}
              <WhyChooseMe />

              {/* Testimonial slider carousel */}
              <Testimonials />

              {/* Accolades and paper presentations list */}
              <Certifications />

              {/* Preview CV and attachments downloader */}
              <ResumeSection />

              {/* Map embed, direct email form, and social links */}
              <Contact />
            </main>

            {/* Dynamic brand copyright footer details */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
