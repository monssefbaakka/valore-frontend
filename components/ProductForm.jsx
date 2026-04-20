"use client";
import { useState } from 'react';

const ProductForm = ({ initialData, onSubmit, buttonText }) => {
  const [product, setProduct] = useState(initialData || {
    title: '',
    description: '',
    price: 0,
    category: 'Templates',
    imageUrl: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === 'price' ? parseFloat(value) : value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!product.title) tempErrors.title = "Le titre est requis";
    if (product.price <= 0) tempErrors.price = "Le prix doit être supérieur à 0";
    if (!product.imageUrl) tempErrors.imageUrl = "L'URL de l'image est requise";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(product);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Titre du produit</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white"
            placeholder="Ex: Guide Travel Hack Bali"
          />
          {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Prix (€)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white"
            />
            {errors.price && <p className="text-red-400 text-xs mt-1">{errors.price}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white">Catégorie</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white"
            >
              <option value="PDF">Guide PDF</option>
              <option value="Templates">Templates</option>
              <option value="Cours">Mini-Cours</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">URL de l'image</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition text-white"
          />
          {errors.imageUrl && <p className="text-red-400 text-xs mt-1">{errors.imageUrl}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg transform transition active:scale-95"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
