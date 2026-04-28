'use client';

import { useState } from 'react';
import { Play, ExternalLink, Eye, Camera } from 'lucide-react';

// Row 1: Cinematic, Video, Commercials
const row1Items = [
  {
    id: 11,
    title: 'Cinematic Travel Reel',
    category: 'Montage Vidéo',
    views: '2.3M',
    tag: 'TikTok',
    icon: Play,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    accent: '#7C3AED',
  },
  {
    id: 12,
    title: 'Brand Identity — NOIR',
    category: 'Direction Créative',
    views: '890K',
    tag: 'Studio',
    icon: ExternalLink,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    accent: '#00D1FF',
  },
  {
    id: 13,
    title: 'Urban Lifestyle Edit',
    category: 'Filming & Post',
    views: '1.1M',
    tag: 'Reels',
    icon: Play,
    image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&q=80',
    accent: '#7C3AED',
  },
  {
    id: 14,
    title: 'Product Launch — ELITE',
    category: 'Contenu Commercial',
    views: '4.5M',
    tag: 'Campagne',
    icon: ExternalLink,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    accent: '#00D1FF',
  },
  {
    id: 15,
    title: 'Night City Timelapses',
    category: 'Cinématographie',
    views: '3.2M',
    tag: 'TikTok',
    icon: Play,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    accent: '#7C3AED',
  },
];

// Row 2: Photography, Portraits, Aesthetics
const row2Items = [
  {
    id: 21,
    title: 'Neon Tokyo Nights',
    category: 'Photographie',
    views: '1.5M',
    tag: 'Urban',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1554797589-7241f4bce47b?w=800&q=80',
    accent: '#00D1FF',
  },
  {
    id: 22,
    title: 'Editorial Portrait',
    category: 'Shooting',
    views: '650K',
    tag: 'Mode',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    accent: '#7C3AED',
  },
  {
    id: 23,
    title: 'Supercar Aesthetics',
    category: 'Automobile',
    views: '2.8M',
    tag: 'Commercial',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80',
    accent: '#00D1FF',
  },
  {
    id: 24,
    title: 'Minimalist Architecture',
    category: 'Design',
    views: '920K',
    tag: 'Lifestyle',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    accent: '#7C3AED',
  },
  {
    id: 25,
    title: 'Street Culture',
    category: 'Reportage',
    views: '1.8M',
    tag: 'Documentaire',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1517598024396-46c53fb3afbe?w=800&q=80',
    accent: '#00D1FF',
  },
];

export default function ShowcaseSection() {
  const [hovered, setHovered] = useState(null);

  // Reusable card component
  const ShowcaseCard = ({ item }) => {
    const Icon = item.icon;
    return (
      <div
        onMouseEnter={() => setHovered(item.id)}
        onMouseLeave={() => setHovered(null)}
        className="relative overflow-hidden rounded-xl border border-white/5 cursor-pointer w-[350px] shrink-0 mx-3 group"
        style={{
          boxShadow: hovered === item.id ? `0 0 30px ${item.accent}40` : '0 0 0px transparent',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        <div className="aspect-[4/3] overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
          <div className="flex justify-between items-start">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md"
              style={{
                color: item.accent,
                borderColor: `${item.accent}50`,
                background: `${item.accent}15`,
              }}
            >
              {item.tag}
            </span>
            <div
              className="w-9 h-9 rounded-full border border-white/10 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
              style={{ color: item.accent }}
            >
              <Icon className="w-4 h-4" />
            </div>
          </div>

          <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-[#A1A1AA] text-xs uppercase tracking-widest mb-1">
              {item.category}
            </p>
            <h3 className="text-white font-bold text-lg font-display mb-3">
              {item.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {item.views} vues
              </span>
              <div
                className="h-px flex-1"
                style={{ background: `linear-gradient(to right, ${item.accent}60, transparent)` }}
              />
            </div>
          </div>
        </div>
        
        <div
          className="absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ borderColor: `${item.accent}50` }}
        />
      </div>
    );
  };

  return (
    <section id="showcase" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Dynamic styles for marquee animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00D1FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-[#00D1FF] uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Portfolio Créatif & Photographie
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Showcase
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#00D1FF] rounded" />
          </div>
          <p className="text-[#A1A1AA] max-w-md text-sm mt-6 md:mt-0 leading-relaxed">
            Une collection visuelle de montages percutants et de photographies immersives. 
            Deux mondes, une seule vision artistique.
          </p>
        </div>
      </div>

      {/* Marquees Area */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8 marquee-container">
        {/* Gradients pour estomper les bords */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex w-[200%] animate-scroll-left marquee-content">
          {/* We duplicate the array to create a seamless loop */}
          {[...row1Items, ...row1Items].map((item, index) => (
            <ShowcaseCard key={`r1-${item.id}-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-[200%] animate-scroll-right marquee-content mt-4">
          {[...row2Items, ...row2Items].map((item, index) => (
            <ShowcaseCard key={`r2-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-20 text-center relative z-10">
        <p className="text-zinc-600 text-sm uppercase tracking-widest">
          L'intégralité de ces visuels a été réalisée par le{' '}
          <span className="text-[#7C3AED] font-semibold glow-text-hover cursor-pointer">Studio Veloir</span>
        </p>
      </div>
    </section>
  );
}
