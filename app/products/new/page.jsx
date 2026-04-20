'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductForm from '@/components/ProductForm';
import Spinner from '@/components/Spinner';

export default function NewProductPage() {
  const { handleAdd, loading } = useProducts();

  if (loading) return <Spinner />;

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Ajouter un produit</h1>
        <p className="text-zinc-500">Remplissez les détails ci-dessous pour publier une nouvelle ressource.</p>
      </div>
      
      <ProductForm 
        onSubmit={handleAdd} 
        formTitle="Détails de la ressource" 
      />
    </div>
  );
}
