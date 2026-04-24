'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Boutique' },
    { href: '/mindset', label: 'Mindset' },
    { href: '/studio', label: 'Studio' },
    { href: '/stories', label: 'Stories' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className={clsx(
          "font-display text-2xl font-bold tracking-widest uppercase flex items-center gap-2",
          pathname === '/' ? "animate-shimmer" : "text-white"
        )}>
          Veloir
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary-light",
                  pathname === link.href ? "text-primary-light" : "text-zinc-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-zinc-800 pl-4">
            {session ? (
              <div className="flex items-center gap-4">
                <Link href={session.user.role === 'ADMIN' ? '/admin' : '/dashboard'} className="text-zinc-300 hover:text-white transition-colors">
                  <User className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => signOut()} 
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                Login
              </Link>
            )}
            <Link href="/cart" className="text-zinc-300 hover:text-white transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-zinc-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-2xl flex flex-col p-6 gap-6">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-lg font-medium tracking-wide uppercase",
                pathname === link.href ? "text-primary-light" : "text-zinc-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-zinc-800 my-2" />
          {session ? (
            <>
              <Link href={session.user.role === 'ADMIN' ? '/admin' : '/dashboard'} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white uppercase">
                Dashboard
              </Link>
              <button 
                onClick={() => { signOut(); setIsOpen(false); }} 
                className="text-lg font-medium text-red-500 uppercase text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white uppercase">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
