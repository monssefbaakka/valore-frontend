// services/api.js
import { initialProducts } from "../data/products";

const BASE_URL = "http://localhost:8080/api";

/**
 * Simulation d'une base de données locale pour le CRUD statique
 * IMPORTANT pour le binôme backend : Une fois le backend prêt, 
 * remplacez le contenu de ces fonctions par des appels fetch() vers ${BASE_URL}
 */
let mockProducts = [...initialProducts];

// Simulation d'un délai réseau
const delay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Récupère tous les produits
 */
export const getAllProducts = async () => {
    await delay();
    // Simulation Backend: const res = await fetch(`${BASE_URL}/products`); return await res.json();
    return [...mockProducts];
};

/**
 * Récupère un produit par son ID
 */
export const getProductById = async (id) => {
    await delay();
    // Simulation Backend: const res = await fetch(`${BASE_URL}/products/${id}`); return await res.json();
    const product = mockProducts.find(p => p.id === parseInt(id));
    return product ? { ...product } : null;
};

/**
 * Crée un nouveau produit
 */
export const createProduct = async (productData) => {
    await delay();
    // Simulation Backend: const res = await fetch(`${BASE_URL}/products`, { method: 'POST', body: JSON.stringify(productData), headers: { 'Content-Type': 'application/json' } });
    const newProduct = {
        ...productData,
        id: mockProducts.length > 0 ? Math.max(...mockProducts.map(p => p.id)) + 1 : 1,
        price: parseFloat(productData.price)
    };
    mockProducts.push(newProduct);
    return newProduct;
};

/**
 * Met à jour un produit existant
 */
export const updateProduct = async (id, productData) => {
    await delay();
    // Simulation Backend: const res = await fetch(`${BASE_URL}/products/${id}`, { method: 'PUT', ... });
    const index = mockProducts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        mockProducts[index] = { 
            ...mockProducts[index], 
            ...productData, 
            id: parseInt(id),
            price: parseFloat(productData.price)
        };
        return mockProducts[index];
    }
    return null;
};

/**
 * Supprime un produit
 */
export const deleteProduct = async (id) => {
    await delay();
    // Simulation Backend: await fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' });
    const initialLength = mockProducts.length;
    mockProducts = mockProducts.filter(p => p.id !== parseInt(id));
    return mockProducts.length < initialLength;
};

/**
 * QUOTES SECTION
 */
export const getAllQuotes = async () => {
    try {
        const res = await fetch(`${BASE_URL}/quotes`);
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Error fetching quotes:", error);
        return [];
    }
};

export const createQuote = async (quoteData, token) => {
    const res = await fetch(`${BASE_URL}/quotes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(quoteData)
    });
    if (!res.ok) throw new Error("Failed to create quote");
    return await res.json();
};
