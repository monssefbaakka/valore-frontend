import Link from 'next/link';
import { Trash2, Edit, ExternalLink } from 'lucide-react';

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition group">
      <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
      <div className="p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">{product.category}</span>
        <h2 className="text-xl font-bold mt-2 mb-4 text-white">{product.title}</h2>
        <p className="text-gray-400 text-sm line-clamp-2 mb-6">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-white">{product.price}€</span>
          <div className="flex gap-2">
            <Link href={`/products/${product.id}`} className="p-2 hover:bg-white/10 rounded-full transition text-gray-400"><ExternalLink size={18} /></Link>
            <Link href={`/products/${product.id}/edit`} className="p-2 hover:bg-white/10 rounded-full transition text-blue-400"><Edit size={18} /></Link>
            <button onClick={() => onDelete(product.id)} className="p-2 hover:bg-white/10 rounded-full transition text-red-400"><Trash2 size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
