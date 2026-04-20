import './globals.css';
import { Inter } from 'next/font/google';
import { ProductProvider } from '@/context/ProductContext';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VELOIR — Digital Lifestyle Store',
  description: 'Premium guides, templates and courses for a modern lifestyle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="bg-zinc-950 text-white">
      <body className={inter.className}>
        <ProductProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </main>
            <footer className="border-t border-zinc-900 py-12 text-center text-zinc-600 text-sm">
              <p>© {new Date().getFullYear()} VELOIR. Tous droits réservés.</p>
            </footer>
          </div>
        </ProductProvider>
      </body>
    </html>
  );
}
