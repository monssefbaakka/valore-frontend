'use client';

import { useEffect, useState } from 'react';

const IntroAnimation = () => {
  const name = "AURELIUS DROGOW";
  const letters = name.split("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden perspective-1000">
      {/* Background Volumetric Fog Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(40,20,0,0.3),transparent_70%)] animate-pulse-slow"></div>

      {/* Floating Particles (Embers) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-amber-500/40 rounded-full blur-[1px] animate-float-up"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-20px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Container with Camera Push-In */}
      <div className={`transition-transform duration-[8000ms] ease-out-expo px-4 ${isVisible ? 'scale-110' : 'scale-100'}`}>
        <div className="flex flex-wrap justify-center items-center tracking-[0.3em] md:tracking-[0.6em]">
          {letters.map((char, index) => (
            <span
              key={index}
              className={`
                relative text-4xl md:text-7xl font-bold transition-all duration-1000
                ${char === " " ? "w-8 md:w-16" : ""}
                ${isVisible ? 'opacity-100 translate-y-0 text-gold-molten' : 'opacity-0 translate-y-4'}
              `}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                // Molten gold text shadow effect
                textShadow: isVisible ? '0 0 20px rgba(234, 179, 8, 0.4), 0 0 40px rgba(180, 83, 9, 0.2)' : 'none'
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Subtle Lens Flare Sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay">
          <div className="h-full w-20 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -rotate-45 translate-x-[-100%] animate-flare-sweep"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-120vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
        
        @keyframes flare-sweep {
          0% { transform: translateX(-150%) rotate(-45deg); }
          100% { transform: translateX(250%) rotate(-45deg); }
        }

        .text-gold-molten {
          background: linear-gradient(
            to bottom,
            #ffdc73 0%,
            #ffbf00 45%,
            #ff8c00 50%,
            #b45309 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
          animation: gold-pulse 4s ease-in-out infinite;
        }

        @keyframes gold-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.2)); }
          50% { filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.6)); }
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }

        .animate-flare-sweep {
          animation: flare-sweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 3s;
        }

        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
