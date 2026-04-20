"use client";

// components/Navbar.jsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/products', label: 'Produits' },
    { href: '/products/new', label: '+ Ajouter' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#c9a84c] transition-colors duration-300">
            Valor<span className="text-[#c9a84c]">é</span>
          </span>
          <span className="text-[10px] text-[#888] tracking-[0.3em] uppercase hidden sm:block">
            Digital Store
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(href)
                    ? 'bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Menu"
        >
          <span className={`w-5 h-px bg-gray-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-px bg-gray-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-gray-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/80 backdrop-blur-xl px-6 py-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive(href)
                  ? 'bg-[#c9a84c]/10 text-[#c9a84c]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
