// components/ProductCard.jsx

/**
 * Carte produit avec image, catégorie, prix et titre.
 * Props:
 *  - product: { id, title, description, price, category, imageUrl }
 */
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { id, title, description, price, category, imageUrl } = product;

  // Badge couleur selon la catégorie
  const categoryColors = {
    Voyage: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    Lifestyle: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    Motivation: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    Business: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  };

  const badgeClass = categoryColors[category] || 'bg-white/10 text-gray-400 border-white/10';

  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-[#161616] border border-white/5 transition-all duration-500 hover:border-[#c9a84c]/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]">
        
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />

          {/* Badge catégorie */}
          <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border backdrop-blur-sm ${badgeClass}`}>
            {category}
          </span>
        </div>

        {/* Contenu */}
        <div className="p-5 pt-3">
          <h3 className="text-base font-semibold text-white mb-1.5 line-clamp-1 group-hover:text-[#c9a84c] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-[#888] line-clamp-2 leading-relaxed mb-4">
            {description}
          </p>

          {/* Prix + CTA */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#c9a84c]">
              {price.toFixed(2)} €
            </span>
            <span className="text-xs text-gray-500 group-hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-1">
              Voir le détail
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
