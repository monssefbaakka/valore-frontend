'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { id, title, price, category, imageUrl } = product;

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
      {/* Container Image */}
      <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            {category}
          </span>
          <span className="text-white font-medium text-lg">
            {price}€
          </span>
        </div>
        
        <h3 className="text-white text-xl font-semibold mb-6 line-clamp-1">
          {title}
        </h3>

        <Link
          href={`/products/${id}`}
          className="flex items-center justify-between w-full text-zinc-400 group-hover:text-white transition-colors"
        >
          <span className="text-sm font-medium">Voir les détails</span>
          <div className="p-2 bg-zinc-800 rounded-full group-hover:bg-white group-hover:text-black transition-all">
            <ArrowUpRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
