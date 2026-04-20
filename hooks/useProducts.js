'use client';

import { useState, useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import { useRouter } from 'next/navigation';

export const useProducts = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProductContext();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Simulation d'un chargement initial (fetch)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconde de délai pour simuler l'UI de chargement

    return () => clearTimeout(timer);
  }, []);

  // Trouver un produit par ID
  const getProductById = (id) => {
    return products.find((p) => p.id === Number(id));
  };

  // Création avec délai simulé
  const handleAdd = async (productData) => {
    setLoading(true);
    setTimeout(() => {
      addProduct(productData);
      setLoading(false);
      router.push('/products');
    }, 800);
  };

  // Modification avec délai simulé
  const handleUpdate = async (productData) => {
    setLoading(true);
    setTimeout(() => {
      updateProduct(productData);
      setLoading(false);
      router.push(`/products/${productData.id}`);
    }, 800);
  };

  // Suppression avec délai simulé
  const handleDelete = async (id) => {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      setLoading(true);
      setTimeout(() => {
        deleteProduct(id);
        setLoading(false);
        router.push('/products');
      }, 500);
    }
  };

  return {
    products,
    loading,
    getProductById,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
};
