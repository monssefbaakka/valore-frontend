export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full border-4 border-zinc-800 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase animate-pulse">
        Chargement de VELOIR...
      </p>
    </div>
  );
}
