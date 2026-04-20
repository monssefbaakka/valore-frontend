"use client";
import { useParams, useRouter } from 'next/navigation';
import { useFetch } from '../../../hooks/useFetch';
import ProductForm from '../../../components/ProductForm';

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const { data: product, isLoading } = useFetch(`http://localhost:8080/api/products/${id}`);

  const handleUpdate = async (updatedData) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        router.push('/products');
      } else {
        alert("Erreur lors de la mise à jour");
      }
    } catch (err) {
      alert("Erreur backend");
    }
  };

  if (isLoading) return <p className="text-center mt-20 text-white">Chargement...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">Modifier le produit</h1>
      {product && <ProductForm initialData={product} onSubmit={handleUpdate} buttonText="Enregistrer les modifications" />}
    </div>
  );
}
