'use client';

import { useState } from 'react';
import { Video, Scissors, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Studio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Video Editing',
    budget: '',
    message: ''
  });

  const packages = [
    {
      title: "Basic Edit",
      price: "150€",
      desc: "Idéal pour vidéos TikTok / Reels courtes",
      features: ["Montage dynamique (jusqu'à 60s)", "Sous-titres animés", "Color grading basique", "1 Révision"]
    },
    {
      title: "Pro Creator",
      price: "350€",
      desc: "Idéal pour vidéos YouTube ou contenu long",
      features: ["Montage narratif (jusqu'à 10 min)", "Sound design immersif", "Color grading avancé", "Animations & B-rolls", "2 Révisions"],
      highlight: true
    },
    {
      title: "Full Production",
      price: "Sur devis",
      desc: "On gère tout de A à Z.",
      features: ["Tournage sur place (Paris)", "Matériel cinéma 4k", "Direction artistique", "Montage premium", "Révisions illimitées"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Studio Header */}
      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <span className="text-primary-light uppercase tracking-widest text-sm font-semibold mb-4 block">Creative Studio</span>
          <h1 className="font-display text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Votre vision.<br/>Notre exécution.
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl">
            Du montage captivant pour les réseaux sociaux à la production vidéo complète. 
            On donne vie à vos idées avec un standard de qualité cinéma.
          </p>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="bg-zinc-950 py-24 border-y border-zinc-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <Scissors className="w-12 h-12 text-zinc-700 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">Montage Vidéo</h3>
            <p className="text-zinc-500">Un montage dynamique, pensé pour la rétention de l'audience. On maîtrise l'art du cut sur YouTube et TikTok.</p>
          </div>
          <div>
            <Video className="w-12 h-12 text-zinc-700 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">Filming</h3>
            <p className="text-zinc-500">Tournage avec caméra cinéma (Sony FX3/A7SIII). Lumière et cadrage premium pour une image spectaculaire.</p>
          </div>
          <div>
            <Zap className="w-12 h-12 text-zinc-700 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">Direction Artistique</h3>
            <p className="text-zinc-500">On ne fait pas que filmer, on réfléchit avec vous au concept, au script et à la DA globale de votre projet.</p>
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="py-24 container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-16">Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <div key={i} className={`p-8 border ${pkg.highlight ? 'border-primary-light bg-zinc-900/50 scale-105 shadow-2xl relative' : 'border-zinc-800 bg-zinc-950'}`}>
              {pkg.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-light text-white text-xs uppercase tracking-widest px-4 py-1 font-bold">Populaire</div>}
              <h3 className="font-display text-2xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-zinc-500 text-sm mb-6">{pkg.desc}</p>
              <div className="text-4xl font-bold text-white mb-8">{pkg.price}</div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-light mr-3 shrink-0" />
                    <span className="text-zinc-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className={`block text-center py-4 w-full uppercase tracking-widest font-bold transition-colors ${pkg.highlight ? 'bg-primary-light text-white hover:bg-primary-dark' : 'border border-zinc-700 text-white hover:bg-zinc-800'}`}>
                Choisir
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto bg-zinc-900/40 p-8 md:p-12 border border-zinc-800">
          <h2 className="font-display text-3xl font-bold text-white mb-2">Demander un Devis</h2>
          <p className="text-zinc-500 mb-8">Remplissez le formulaire ci-dessous, nous vous répondrons sous 24h ouvrées.</p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Nom / Entreprise</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" required />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Type de projet</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light appereance-none">
                  <option>Montage Vidéo Court (TikTok/Reels)</option>
                  <option>Montage Vidéo Long (YouTube)</option>
                  <option>Tournage Produit / Pub</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Budget Estimé</label>
                <input type="text" placeholder="Ex: 500€" className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" required />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Détails du projet</label>
              <textarea rows={5} className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" placeholder="Parlez-nous de votre vision..." required></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black py-4 uppercase font-bold tracking-widest hover:bg-zinc-200 transition-colors">
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
