"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';
import * as api from '../services/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Charger les produits au montage du composant
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await api.getAllProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors du chargement des produits");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fonction pour rafraîchir la liste manuellement après une action CRUD
  const refreshProducts = async () => {
    await fetchProducts();
  };

  const value = {
    products,
    loading,
    error,
    refreshProducts,
    setLoading
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext doit être utilisé à l'intérieur d'un ProductProvider");
  }
  return context;
};
