'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Download, Package, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('orders');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center pt-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary-light"></div></div>;
  }

  if (!session) return null;

  return (
    <div className="pt-32 pb-24 min-h-screen flex container mx-auto px-6 gap-12 flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 sticky top-32">
          <div className="mb-8">
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Connecté en tant que</p>
            <h2 className="font-display text-xl font-bold text-white">{session.user.firstname} {session.user.lastname}</h2>
            <p className="text-sm text-zinc-500 mt-1">{session.user.email}</p>
          </div>

          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'orders' ? 'bg-primary-light/10 text-primary-light border-l-2 border-primary-light' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50 border-l-2 border-transparent'}`}
            >
              <Package className="w-4 h-4 mr-3" /> Mes Achats
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-primary-light/10 text-primary-light border-l-2 border-primary-light' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50 border-l-2 border-transparent'}`}
            >
              <Settings className="w-4 h-4 mr-3" /> Paramètres
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {activeTab === 'orders' && (
          <div>
            <h1 className="font-display text-3xl font-bold text-white mb-8 border-b border-zinc-900 pb-4">Mes Achats & Téléchargements</h1>
            
            {/* Dummy Order List */}
            <div className="space-y-6">
              {[1, 2].map(order => (
                <div key={order} className="bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-zinc-950 shrink-0">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80" alt="Cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <span className="text-xs text-zinc-500 uppercase tracking-widest">Commande #VAL-{order}094</span>
                    <h3 className="font-display text-xl font-bold text-white mt-1 mb-2">The Ultimate Creator Guide</h3>
                    <p className="text-primary-light font-medium text-sm">Accès illimité</p>
                  </div>
                  <button className="flex items-center px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors shrink-0">
                    <Download className="w-4 h-4 mr-2" /> Télécharger
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h1 className="font-display text-3xl font-bold text-white mb-8 border-b border-zinc-900 pb-4">Paramètres du profil</h1>
            <div className="max-w-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Email</label>
                  <input type="email" disabled value={session.user.email} className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-500 p-4 cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Prénom</label>
                    <input type="text" defaultValue={session.user.firstname} className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Nom</label>
                    <input type="text" defaultValue={session.user.lastname} className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 focus:outline-none focus:border-primary-light" />
                  </div>
                </div>
                <button type="submit" className="border border-zinc-700 text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-zinc-800 transition-colors">
                  Enregistrer les modifications
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
