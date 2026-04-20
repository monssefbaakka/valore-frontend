'use client';

import React, { createContext, useState, useContext } from 'react';
import { initialProducts } from '../data/products';

// Création du contexte
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // État global des produits initialisé avec les données statiques
  const [products, setProducts] = useState(initialProducts);

  // Fonction pour ajouter un produit
  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

  // Fonction pour modifier un produit
  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === Number(updatedProduct.id) ? updatedProduct : p))
    );
  };

  // Fonction pour supprimer un produit
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== Number(id)));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook personnalisé interne pour accéder facilement au contexte
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext doit être utilisé à l\'intérieur de ProductProvider');
  }
  return context;
};
