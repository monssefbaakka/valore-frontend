'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';
import { ArrowRight, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const { products, loading } = useProducts();

  if (loading) return <Spinner />;

  // Sélectionner les 3 premiers produits pour la section "Sélection"
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 flex flex-col items-center text-center space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
          </span>
          Nouveaux guides disponibles
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter max-w-4xl leading-[1.1]">
          Élevez votre <span className="text-zinc-600 italic">Lifestyle</span> Digital.
        </h1>
        
        <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed">
          VELOIR propose des ressources exclusives pour les créateurs, nomades et passionnés de discipline personnelle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link 
            href="/products" 
            className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all active:scale-95"
          >
            Explorer le catalogue
            <ArrowRight size={18} />
          </Link>
          <Link 
            href="/products/new" 
            className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all"
          >
            Contribuer
          </Link>
        </div>
      </section>

      {/* Features section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-zinc-900">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <h3 className="text-lg font-bold">Accès Instantané</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">Recevez vos produits digitaux directement après validation par email.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center border border-zinc-800">
            <Globe size={24} />
          </div>
          <h3 className="text-lg font-bold">Sans Frontières</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">Conçu pour les nomades digitaux et ceux qui aspirent à la liberté géographique.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center border border-zinc-800">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-lg font-bold">Qualité Premium</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">Chaque ressource est testée et validée par notre équipe d'experts.</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Sélection de la semaine</h2>
            <p className="text-zinc-500">Nos ressources les plus consultées par la communauté.</p>
          </div>
          <Link href="/products" className="group text-zinc-400 hover:text-white flex items-center gap-2 transition-all">
            Voir tout le catalogue
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
