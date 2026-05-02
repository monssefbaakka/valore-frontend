'use client';

import { useState } from 'react';
import { Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProductForm = ({ initialData = {}, onSubmit, formTitle }) => {
  const router = useRouter();
  
  // État local du formulaire
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    price: initialData.price || '',
    category: initialData.category || 'Motivation',
    imageUrl: initialData.imageUrl || '',
    ...initialData
  });

  const [errors, setErrors] = useState({});

  // Gestion des changements d'inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation simple
  const validate = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Invalid price";
    if (!formData.imageUrl) newErrors.imageUrl = "Image URL is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-white mb-8">{formTitle}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Titre */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Product Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: Meditation Guide"
            className={`w-full bg-zinc-950 border ${errors.title ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors`}
          />
          {errors.title && <span className="text-xs text-red-500">{errors.title}</span>}
        </div>

        {/* Prix & Catégorie */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Price (€)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              className={`w-full bg-zinc-950 border ${errors.price ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors`}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
            >
              <option value="Motivation">Motivation</option>
              <option value="Travel">Travel</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Image URL (Unsplash)</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://images.unsplash.com/..."
            className={`w-full bg-zinc-950 border ${errors.imageUrl ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors`}
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full bg-zinc-950 border ${errors.description ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors`}
          ></textarea>
        </div>

        {/* Boutons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all active:scale-95"
          >
            <Save size={18} />
            Save Product
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors"
          >
             Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
