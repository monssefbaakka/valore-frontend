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
      desc: "Ideal for short TikTok / Reels videos",
      features: ["Dynamic editing (up to 60s)", "Animated subtitles", "Basic color grading", "1 Revision"]
    },
    {
      title: "Pro Creator",
      price: "350€",
      desc: "Ideal for YouTube videos or long content",
      features: ["Narrative editing (up to 10 min)", "Immersive sound design", "Advanced color grading", "Animations & B-rolls", "2 Revisions"],
      highlight: true
    },
    {
      title: "Full Production",
      price: "Custom Quote",
      desc: "We handle everything from A to Z.",
      features: ["On-site shooting (Paris)", "4k Cinema Equipment", "Art Direction", "Premium editing", "Unlimited revisions"]
    }
  ];

  return (
    <div className="pb-24 min-h-screen bg-black">
      {/* Cinematic Video Banner */}
      <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <iframe
          src="https://www.youtube.com/embed/-mjowJDvNLM?autoplay=1&mute=1&loop=1&playlist=-mjowJDvNLM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 w-[250vw] md:w-[150vw] h-[150vh] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
        ></iframe>
        
        {/* Banner Content */}
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
          <div className="max-w-4xl">
            <span className="text-primary-light uppercase tracking-widest text-sm font-semibold mb-4 block animate-pulse">Creative Studio</span>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Your vision.<br/>Our execution.
            </h1>
            <p className="text-zinc-200 text-xl max-w-2xl drop-shadow-md">
              From captivating editing for social media to full video production. 
              We bring your ideas to life with cinema-quality standards.
            </p>
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
      </div>

      {/* Backstage Photos Section */}
      <div className="py-24 bg-black relative z-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-2 block">Behind The Scenes</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Behind the Scenes</h2>
              <p className="text-zinc-400 max-w-xl">
                A glimpse into our creative process. From the set to the editing room, 
                discover what goes on behind the scenes of our cinematic productions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img src="/images/studio/backstage_cam.png" alt="Backstage Camera" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-white font-bold tracking-wider text-sm uppercase drop-shadow-lg">The Equipment</span>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm md:mt-12">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img src="/images/studio/backstage_crew.png" alt="Backstage Crew" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-white font-bold tracking-wider text-sm uppercase drop-shadow-lg">The Crew</span>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img src="/images/studio/backstage_monitor.png" alt="Backstage Monitor" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-white font-bold tracking-wider text-sm uppercase drop-shadow-lg">The Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="bg-zinc-950 py-24 border-y border-zinc-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <Scissors className="w-12 h-12 text-zinc-700 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">Video Editing</h3>
            <p className="text-zinc-500">Dynamic editing, designed for audience retention. We master the art of the cut on YouTube and TikTok.</p>
          </div>
          <div>
            <Video className="w-12 h-12 text-zinc-700 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">Filming</h3>
            <p className="text-zinc-500">Shooting with cinema camera (Sony FX3/A7SIII). Premium lighting and framing for spectacular images.</p>
          </div>
          <div>
            <Zap className="w-12 h-12 text-zinc-700 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">Art Direction</h3>
            <p className="text-zinc-500">We don't just shoot, we brainstorm with you on the concept, script, and overall art direction of your project.</p>
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="py-24 container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-16">Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <div key={i} className={`p-8 border ${pkg.highlight ? 'border-primary-light bg-zinc-900/50 scale-105 shadow-2xl relative' : 'border-zinc-800 bg-zinc-950'}`}>
              {pkg.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-light text-white text-xs uppercase tracking-widest px-4 py-1 font-bold">Popular</div>}
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
                Choose
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto bg-zinc-900/40 p-8 md:p-12 border border-zinc-800">
          <h2 className="font-display text-3xl font-bold text-white mb-2">Request a Quote</h2>
          <p className="text-zinc-500 mb-8">Fill out the form below, we will reply within 24 business hours.</p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Name / Company</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" required />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Project Type</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light appereance-none">
                  <option>Short Video Editing (TikTok/Reels)</option>
                  <option>Long Video Editing (YouTube)</option>
                  <option>Product / Ad Shooting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Estimated Budget</label>
                <input type="text" placeholder="Ex: 500€" className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" required />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Project Details</label>
              <textarea rows={5} className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" placeholder="Tell us about your vision..." required></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black py-4 uppercase font-bold tracking-widest hover:bg-zinc-200 transition-colors">
              Submit Request
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
