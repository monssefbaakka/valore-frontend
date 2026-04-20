import Link from 'next/link';
import { ShoppingBag, Home } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/products" className="text-2xl font-black tracking-tighter hover:text-indigo-400 transition text-white">
          VALORÉ<span className="text-indigo-500">.</span>
        </Link>
        
        <div className="flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-white">
          <Link href="/products" className="hover:text-indigo-400 transition flex items-center gap-2">
            <Home size={16} /> Boutique
          </Link>
          <Link href="/products/new" className="bg-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-500 transition">
            Vendre un produit
          </Link>
        </div>
      </div>
    </nav>
  );
}
