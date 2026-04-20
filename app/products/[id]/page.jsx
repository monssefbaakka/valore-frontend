'use client';

import { useParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import { Edit2, Trash2, ArrowLeft, Tag, ShoppingBag } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { getProductById, handleDelete, loading } = useProducts();

  const product = getProductById(id);

  if (loading) return <Spinner />;

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
        <Link href="/products" className="text-zinc-500 hover:text-white underline">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Back link */}
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
      >
        <ArrowLeft size={16} />
        Retour
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Image Section */}
        <div className="rounded-3xl overflow-hidden bg-zinc-900 aspect-square">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </div>

        {/* Right: Info Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold rounded-full">
                <Tag size={12} />
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{product.title}</h1>
            <p className="text-3xl font-light text-zinc-300">{product.price}€</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-900 pb-2">Description</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{product.description}</p>
          </div>

          <button className="w-full bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5">
            <ShoppingBag size={20} />
            Acheter maintenant
          </button>

          {/* Admin actions */}
          <div className="pt-8 flex items-center gap-4 border-t border-zinc-900">
            <Link 
              href={`/products/${id}/edit`}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              <Edit2 size={16} />
              Modifier
            </Link>
            <button 
              onClick={() => handleDelete(id)}
              className="px-6 py-3 border border-red-900/50 text-red-500 rounded-xl text-sm font-medium hover:bg-red-950 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
