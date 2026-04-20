// components/Spinner.jsx

/**
 * Composant spinner de chargement réutilisable
 * Props:
 *  - size: "sm" | "md" | "lg"  (défaut: "md")
 *  - text: string optionnel à afficher sous le spinner
 */
export default function Spinner({ size = "md", text = "" }) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-9 h-9 border-2",
    lg: "w-14 h-14 border-[3px]",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`
          ${sizes[size]}
          rounded-full
          border-white/10
          border-t-[#c9a84c]
          animate-spin-gold
        `}
        role="status"
        aria-label="Chargement..."
      />
      {text && (
        <p className="text-sm text-[#888] tracking-wide animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
