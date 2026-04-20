"use client";
import ProductForm from '../../../components/ProductForm';
import { useRouter } from 'next/navigation';

export default function NewProduct() {
  const router = useRouter();

  const handleCreate = async (productData) => {
    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        router.push('/products');
      } else {
        alert("Erreur lors de la création");
      }
    } catch (err) {
      alert("Erreur backend");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">Créer un nouveau bijou digital</h1>
      <ProductForm onSubmit={handleCreate} buttonText="Publier sur Valoré" />
    </div>
  );
}
