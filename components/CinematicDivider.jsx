'use client';

import { useEffect, useState } from 'react';

export default function CinematicDivider() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-12 bg-black border-y border-zinc-800/50 overflow-hidden flex items-center shadow-[0_0_20px_rgba(30,144,255,0.1)]">
      {/* Diagonal stylish pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', 
             backgroundSize: '10px 10px' 
           }} />

      {/* Neon Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      {/* Background scanlines effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.1), rgba(0, 255, 0, 0.05), rgba(0, 0, 255, 0.1))', backgroundSize: '100% 2px, 3px 100%' }} />
      
      <div className="container mx-auto px-6 flex justify-between items-center z-10">
        {/* Left side: Metadata */}
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest font-bold">Rec_Active</span>
          </div>
          <span className="hidden md:block text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]"><span className="text-zinc-700">FPS:</span> <span className="text-zinc-400">60.00</span></span>
          <span className="hidden lg:block text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]"><span className="text-zinc-700">ISO:</span> <span className="text-zinc-400">800</span></span>
        </div>

        {/* Center: Scrolling text or Branding */}
        <div className="flex-1 overflow-hidden mx-12 hidden md:block">
          <div className="whitespace-nowrap animate-marquee flex gap-12">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] italic group-hover:text-zinc-500 transition-colors">
                Aurelius Drogow — <span className="text-cyan-900/40">Cinematic Universe</span> — Veloir Studio — <span className="text-purple-900/40">Premium Digital Assets</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right side: Time / Metadata */}
        <div className="flex gap-6 items-center">
          <span className="text-[10px] font-mono text-cyan-400/90 tracking-[0.2em] font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">TC: {time || '00:00:00'}</span>
          <div className="h-4 w-[1px] bg-zinc-800" />
          <span className="text-[10px] font-mono text-zinc-600 tracking-widest">DRW_ST_26</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
