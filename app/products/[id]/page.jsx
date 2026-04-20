"use client";
import { useParams } from 'next/navigation';
import { useFetch } from '../../../hooks/useFetch';
import { ChevronLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useFetch(`http://localhost:8080/api/products/${id}`);

  if (isLoading) return <p className="text-center mt-20 text-white">Analyse du produit...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">Produit introuvable.</p>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <Link href="/products" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
        <ChevronLeft size={20} /> Retour à la boutique
      </Link>

      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 rounded-3xl p-8 border border-white/10 text-white">
          <img src={product.imageUrl} alt={product.title} className="rounded-2xl w-full h-[400px] object-cover" />
          
          <div className="flex flex-col justify-center">
            <span className="text-indigo-400 font-bold uppercase text-sm tracking-widest">{product.category}</span>
            <h1 className="text-4xl font-black mt-2 mb-4">{product.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{product.description}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-5xl font-black tracking-tighter">{product.price}€</span>
              <button className="bg-white text-black px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-indigo-400 hover:text-white transition transform active:scale-95">
                <Download size={20} /> Acheter maintenant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
