'use client';

export default function CinematicFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden md:block">
      {/* Top Left Bracket */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30">
        <span className="absolute -top-6 -left-0 text-[10px] font-mono text-cyan-600/50 uppercase tracking-widest">
          LVL: 12
        </span>
      </div>

      {/* Top Right Metadata Only (No bracket to keep it clean) */}
      <div className="absolute top-24 right-8 text-right">
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest block">
          STB: READY
        </span>
        <span className="text-[10px] font-mono text-cyan-500/40 uppercase tracking-widest block">
          VELOIR_PRO_V3
        </span>
      </div>

      {/* Bottom Left Metadata Only */}
      <div className="absolute bottom-12 left-8">
        <div className="flex flex-col gap-1">
          <div className="w-12 h-[2px] bg-zinc-900" />
          <div className="w-8 h-[2px] bg-cyan-900/30" />
          <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-tighter mt-1">
            Data_Stream_Enabled
          </span>
        </div>
      </div>

      {/* Bottom Right Bracket (Focus style) */}
      <div className="absolute bottom-12 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 flex items-end justify-end">
        <span className="absolute -bottom-6 right-0 text-[10px] font-mono text-purple-600/50 uppercase tracking-widest">
          EXP: 1/60
        </span>
      </div>

      {/* Subtle center focus marks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-white" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-white" />
      </div>
    </div>
  );
}
