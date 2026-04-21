import Link from 'next/link';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/800x600?text=Product'} 
          alt={product.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-primary-light">
          {product.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl text-white mb-2">{product.title}</h3>
        
        <div className="flex items-center gap-2 mb-6">
          <div className="flex text-primary-light">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-zinc-300 text-sm ml-1 font-medium">{product.rating}</span>
          </div>
          <span className="text-zinc-600 text-sm">({product.reviews} avis)</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-6">
          <span className="text-xl font-bold text-white">{product.price.toFixed(2)} €</span>
          <Link 
            href={`/shop/${product.id}`}
            className="text-sm uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Découvrir
          </Link>
        </div>
      </div>
    </div>
  );
}
