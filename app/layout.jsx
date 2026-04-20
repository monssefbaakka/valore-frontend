import Navbar from '../components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Valoré — Produits Digitaux',
  description: 'Boutique premium pour créateurs de contenu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-100 min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
