'use client';

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Fallback for when backend is not running yet
      const res = await axios.get('http://localhost:8080/api/products').catch(() => ({ data: [
        { id: 1, title: 'The Ultimate Creator Guide', price: 29.99, category: 'Guide PDF', imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', rating: 5, reviews: 120, description: "Un guide PDF complet de 50 pages qui t'apprend à hacker l'algorithme TikTok." },
        { id: 2, title: 'Cinematic LUTs Pack', price: 49.99, category: 'Templates', imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80', rating: 4.8, reviews: 85, description: "10 LUTs exclusifs pour donner un look cinéma à tes vidéos." },
        { id: 3, title: 'TikTok Virality Masterclass', price: 99.99, category: 'Mini-cours', imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80', rating: 4.9, reviews: 200, description: "Une formation de 2 heures en vidéo pour passer de 0 à 100k abonnés." },
        { id: 4, title: 'Notion Creator Dashboard', price: 19.99, category: 'Templates', imageUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80', rating: 4.5, reviews: 40, description: "Le template Notion que j'utilise pour organiser mes scripts et tournages." },
      ]}));
      
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
