"use client";
import { useFetch } from '../../hooks/useFetch';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  const { data: products, isLoading, error, refetch } = useFetch('http://localhost:8080/api/products');

  const handleDelete = async (id) => {
    if (confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      try {
        await fetch(`http://localhost:8080/api/products/${id}`, { method: 'DELETE' });
        refetch();
      } catch (err) {
        alert("Erreur lors de la suppression");
      }
    }
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen text-white">Chargement de Valoré...</div>;
  if (error) return <div className="text-red-500 p-10">Erreur : {error}</div>;

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Nos Produits Digitaux
        </h1>
        <Link href="/products/new" className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          <Plus size={20} /> Nouveau Produit
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
}
