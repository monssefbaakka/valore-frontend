'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';

export default function ProductsPage() {
  const { products, loading } = useProducts();

  if (loading) return <Spinner />;

  return (
    <div className="space-y-12">
      {/* Header section */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Catalogue <span className="text-zinc-500">Digital.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Découvrez notre sélection exclusive de ressources digitales conçues pour transformer votre quotidien et booster votre productivité.
        </p>
      </div>

      {/* Grid des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty state si aucun produit */}
      {products.length === 0 && (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
          <p className="text-zinc-500 font-medium">Aucun produit trouvé dans le catalogue.</p>
        </div>
      )}
    </div>
  );
}
