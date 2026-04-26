import Link from 'next/link';
import { ArrowRight, Star, Video, Download } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import CinematicDivider from '@/components/CinematicDivider';

// Dummy data for products featured
const featuredProducts = [
  { id: 1, title: 'The Ultimate Creator Guide', price: 29.99, category: 'Guide PDF', imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', rating: 5, reviews: 120 },
  { id: 2, title: 'Cinematic LUTs Pack', price: 49.99, category: 'Templates', imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80', rating: 4.8, reviews: 85 },
  { id: 3, title: 'TikTok Virality Masterclass', price: 99.99, category: 'Mini-cours', imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80', rating: 4.9, reviews: 200 }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#0A0A0A]">
      {/* HERO SECTION */}
      <section className="relative h-screen flex glow-line-bottom overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]/80 md:bg-[#0A0A0A]/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1600&q=80" 
            alt="Creative Studio" 
            className="w-full h-full object-cover filter grayscale opacity-30"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 flex flex-col justify-center items-center text-center animate-fade-in">
          <span className="text-[#00D1FF] uppercase tracking-[0.3em] text-sm mb-6 font-semibold">@drogow Présente</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
            <span className="animate-shimmer">HYBRID VISION.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#00D1FF]">
              CREATE INFINITY.
            </span>
          </h1>
          <p className="text-[#A1A1AA] max-w-2xl text-lg md:text-xl mb-12 font-light">
            L'alliance parfaite entre des ressources digitales premium pour les créateurs
            et un studio créatif complet pour propulser vos projets vidéos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/shop" className="group px-8 py-4 luxury-btn font-semibold uppercase tracking-widest">
              Voir les produits
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/studio" className="group px-8 py-4 luxury-btn font-semibold uppercase tracking-widest">
              Découvrir le Studio
              <Video className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* OVERRIDE CINEMATIC DIVIDER FOR THEME */}
      <div className="glow-line-bottom w-full"></div>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative stitch-border luxury-card p-2 md:p-4">
            <div className="aspect-[4/5] bg-black overflow-hidden relative rounded-lg">
              {/* Fallback image */}
              <img 
                src="https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80" 
                alt="Creator @drogow" 
                className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#0A0A0A] border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.2)] p-8 hidden md:block rounded-xl stitch-border">
              <p className="font-display text-4xl font-bold text-white mb-2">1.5M+</p>
              <p className="text-[#00D1FF] uppercase tracking-widest text-xs">Abonnés TikTok</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Qui suis-je ?</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#00D1FF] mb-8 rounded" />
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              Je suis <strong className="text-white glow-text-hover">@drogow</strong>, créateur de contenu et vidéaste passionné. 
              Des millions de vues sur TikTok m'ont appris une chose : l'attention est le nouvel or.
            </p>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
              J'ai fondé Veloir pour partager mes secrets via des guides exclusifs, et mettre mes compétences en 
              filming et montage à votre disposition. Que vous souhaitiez apprendre ou déléguer, vous êtes au bon endroit.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l border-[#7C3AED]/30 pl-4 stitch-border border-y-0 border-r-0">
                <Download className="text-[#00D1FF] w-8 h-8 mb-4 glow-text-hover" />
                <h3 className="text-white font-bold mb-2">Ressources Premium</h3>
                <p className="text-zinc-500 text-sm">Guides, templates et cours pour exploser vos stats.</p>
              </div>
              <div className="border-l border-[#7C3AED]/30 pl-4 stitch-border border-y-0 border-r-0">
                <Video className="text-[#00D1FF] w-8 h-8 mb-4 glow-text-hover" />
                <h3 className="text-white font-bold mb-2">Studio Créatif</h3>
                <p className="text-zinc-500 text-sm">Montage dynamique et filming professionnel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line-bottom w-full"></div>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-[#0A0A0A] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Produits Phares</h2>
              <p className="text-[#A1A1AA] max-w-xl">Le top de mes ressources digitales pour vous faire gagner des années d'apprentissage.</p>
            </div>
            <Link href="/shop" className="text-[#00D1FF] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold flex items-center mt-6 md:mt-0 glow-text-hover">
              Voir tout <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line-bottom w-full"></div>

      {/* TIKTOK REVIEWS / EMBEDS SECTION */}
      <section className="py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-center text-3xl md:text-5xl font-bold text-white mb-16">Ils parlent de Veloir</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="luxury-card stitch-border p-8 transition-colors">
                <div className="flex text-[#7C3AED] mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[#A1A1AA] italic mb-6">"Le Guide Ultime a complètement changé ma façon de script mes vidéos. +50k abonnés en 2 mois, incroyable !"</p>
                <div className="flex items-center gap-4 border-t border-[#7C3AED]/20 pt-4">
                  <div className="w-10 h-10 bg-black border border-[#00D1FF]/40 rounded-full glow-text-hover" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Alex M.</h4>
                    <p className="text-[#00D1FF] text-xs">Acheteur vérifié</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line-bottom w-full"></div>

      {/* NEWSLETTER */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center luxury-card stitch-border p-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Rejoignez l'Élite.</h2>
          <p className="text-[#A1A1AA] mb-10 text-lg">
            Abonnez-vous à la newsletter pour recevoir des tips exclusifs sur la création de contenu, les offres Veloir et des coupons secrets.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="px-6 py-4 bg-[#000000] border border-[#7C3AED]/30 text-white placeholder-zinc-600 w-full sm:w-96 focus:outline-none focus:border-[#00D1FF] transition-colors rounded-md shadow-[inset_0_0_10px_rgba(124,58,237,0.1)]"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 luxury-btn font-bold uppercase tracking-widest whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
