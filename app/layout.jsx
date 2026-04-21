import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntroWrapper from '@/components/IntroWrapper';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata = {
  title: 'Veloir — Studio & Digital Shop by @drogow',
  description: 'Premium digital products, filming, and video editing services by @drogow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans flex flex-col min-h-screen bg-black">
        <Providers>
          <IntroWrapper>
            <Navbar />
            <main className="flex-grow flex flex-col">
              {children}
            </main>
            <Footer />
          </IntroWrapper>
        </Providers>
      </body>
    </html>
  );
}
