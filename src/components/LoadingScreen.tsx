import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import GrowWithPRLogo from "./Logo";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2400; // 2.4 seconds
    const intervalTime = 30; // Milliseconds per update
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Wait for fadeout animation to complete
          }, 400);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Round count to display nicely
  const displayCount = Math.floor(count);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -80,
            scale: 1.05,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle Grid Matrix Overlay */}
          <div className="absolute inset-0 dot-matrix opacity-[0.25] pointer-events-none" />

          {/* Core Gold Spotlight Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center select-none">
            {/* Animated Logo Container */}
            <motion.div
              className="flex items-center justify-center w-36 h-36 mb-8"
              initial={{ scale: 0.7, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <GrowWithPRLogo className="w-full h-full" glow={true} />
            </motion.div>

            {/* Brand Title Stagger */}
            <div className="overflow-hidden mb-2 py-1">
              <motion.h1 
                className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-white uppercase font-sans flex items-center justify-center gap-2"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                GROWWITH <span className="text-brand-gold neon-glow-gold">PR</span>
              </motion.h1>
            </div>

            <motion.p 
              className="text-[10px] sm:text-xs tracking-[0.4em] text-brand-gold/70 capitalize font-mono mb-12 flex items-center justify-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              DIGITAL ENGINEERING PORTFOLIO
            </motion.p>

            {/* Premium Progress Meter */}
            <div className="relative mt-2 flex flex-col items-center w-64">
              {/* Slit line progress bar */}
              <div className="w-full h-[2px] bg-neutral-900 overflow-hidden relative rounded-full">
                <motion.div 
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light"
                  style={{ width: `${displayCount}%` }}
                />
              </div>

              {/* Digital Percentage Counter */}
              <div className="flex justify-between w-full mt-3 text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
                <span>SYSTEM SYNC</span>
                <span className="text-brand-gold font-bold">{displayCount}%</span>
              </div>

              {/* Status messages mapping with load progress */}
              <div className="h-6 mt-4">
                <AnimatePresence mode="wait">
                  {displayCount < 25 && (
                    <motion.div
                      key="msg1"
                      className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500 font-mono"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      COORDINATING GPU CORES...
                    </motion.div>
                  )}
                  {displayCount >= 25 && displayCount < 60 && (
                    <motion.div
                      key="msg2"
                      className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold/60 font-mono"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      SYNCING AGENCY PORTFOLIOS...
                    </motion.div>
                  )}
                  {displayCount >= 60 && displayCount < 90 && (
                    <motion.div
                      key="msg3"
                      className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold/90 font-mono"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      COMPILING KINETIC GRAPHICS...
                    </motion.div>
                  )}
                  {displayCount >= 90 && (
                    <motion.div
                      key="msg4"
                      className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white font-mono"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      EXPERIENCES STANDBY...
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
