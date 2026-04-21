'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const name = "AURELIUS DROGOW";
  const letters = name.split("");

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 1000); // Wait for exit animation
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

          {/* Volumetric Light / Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]"></div>

          {/* Animating Particles - Client Side Only to avoid Hydration Mismatch */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {isMounted && [...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: "110%", 
                  opacity: 0 
                }}
                animate={{ 
                  y: "-10%", 
                  opacity: [0, 0.4, 0],
                  x: (Math.random() * 100 + (Math.random() - 0.5) * 10) + "%"
                }}
                transition={{ 
                  duration: Math.random() * 5 + 5, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 5
                }}
                className="absolute w-[2px] h-[2px] bg-amber-200/40 rounded-full blur-[1px]"
              />
            ))}
          </div>

          {/* The Branding */}
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center tracking-[0.3em] md:tracking-[0.6em]"
            >
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.5 + i * 0.08,
                    ease: [0.215, 0.61, 0.355, 1] 
                  }}
                  className={`
                    text-3xl sm:text-5xl md:text-8xl font-serif italic text-white uppercase
                    ${char === " " ? "w-4 md:w-16" : ""}
                  `}
                  style={{
                    textShadow: "0 0 40px rgba(255,255,255,0.1)",
                    background: "linear-gradient(to bottom, #fff, #a1a1aa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Subline */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
              className="mt-8 text-[10px] md:text-sm uppercase text-zinc-500 font-sans tracking-[0.5em] font-light"
            >
              Studio & Digital Vision
            </motion.div>
          </div>

          {/* Cinematic Lens Flare Sweep */}
          <motion.div 
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none mix-blend-screen overflow-hidden"
          >
            <div className="h-full w-[40vw] bg-gradient-to-r from-transparent via-amber-200/5 to-transparent rotate-12 -translate-y-20"></div>
          </motion.div>

          {/* Flash Effect at end */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 0.1, 0] }}
             transition={{ delay: 4.2, duration: 0.3 }}
             className="absolute inset-0 bg-white pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
