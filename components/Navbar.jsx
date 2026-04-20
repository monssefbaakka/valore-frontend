'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, PlusCircle, Home } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  // Helper pour les classes actives
  const isActive = (path) => 
    pathname === path ? 'text-white' : 'text-zinc-500 hover:text-zinc-300';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              VELOIR<span className="text-zinc-500">.</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <Link href="/" className={`flex items-center gap-2 transition-colors ${isActive('/')}`}>
              <Home size={18} />
              <span className="hidden sm:block text-sm font-medium">Accueil</span>
            </Link>
            
            <Link href="/products" className={`flex items-center gap-2 transition-colors ${isActive('/products')}`}>
              <LayoutGrid size={18} />
              <span className="hidden sm:block text-sm font-medium">Catalogue</span>
            </Link>

            <Link 
              href="/products/new" 
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-all active:scale-95"
            >
              <PlusCircle size={18} />
              <span className="hidden sm:block">Nouveau</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
