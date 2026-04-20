"use client";

import { useState } from 'react';
import * as api from '../services/api';
import { useProductContext } from '../context/ProductContext';
import { useRouter } from 'next/navigation';

export const useProducts = () => {
  const { refreshProducts, setLoading } = useProductContext();
  const [error, setError] = useState(null);
  const router = useRouter();

  const addProduct = async (productData) => {
    setLoading(true);
    try {
      await api.createProduct(productData);
      await refreshProducts();
      router.push('/products');
    } catch (err) {
      setError("Erreur lors de l'ajout du produit");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (id, productData) => {
    setLoading(true);
    try {
      await api.updateProduct(id, productData);
      await refreshProducts();
      router.push(`/products/${id}`);
    } catch (err) {
      setError("Erreur lors de la modification du produit");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;
    
    setLoading(true);
    try {
      await api.deleteProduct(id);
      await refreshProducts();
      router.push('/products');
    } catch (err) {
      setError("Erreur lors de la suppression");
    } finally {
      setLoading(false);
    }
  };

  return {
    addProduct,
    editProduct,
    removeProduct,
    error
  };
};
