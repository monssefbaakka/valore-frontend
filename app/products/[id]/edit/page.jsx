'use client';

import { useParams } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import ProductForm from '@/components/ProductForm';
import Spinner from '@/components/Spinner';

export default function EditProductPage() {
  const { id } = useParams();
  const { getProductById, handleUpdate, loading } = useProducts();

  const product = getProductById(id);

  if (loading) return <Spinner />;

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Produit introuvable.</h2>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Modifier la ressource</h1>
        <p className="text-zinc-500">Mettez à jour les informations de <span className="text-white">"{product.title}"</span></p>
      </div>
      
      <ProductForm 
        initialData={product} 
        onSubmit={handleUpdate} 
        formTitle="Édition du produit" 
      />
    </div>
  );
}
