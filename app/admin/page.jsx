'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LayoutDashboard, PackageSearch, Users, ShoppingCart, Tag, LogOut, Plus } from 'lucide-react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (session && session.user.role !== 'ADMIN') {
      router.push('/dashboard');
    }
  }, [status, session, router]);

  if (status === 'loading' || (session && session.user.role !== 'ADMIN')) {
    return <div className="min-h-screen flex items-center justify-center pt-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary-light"></div></div>;
  }

  const statCards = [
    { title: "Revenu Total", value: "14,590 €", change: "+12%" },
    { title: "Ventes du jour", value: "32", change: "+5%" },
    { title: "Produits Actifs", value: "12", change: "0%" },
    { title: "Nouveaux Clients", value: "145", change: "+24%" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen flex container mx-auto px-6 gap-8 flex-col lg:flex-row">
      {/* Sidebar Admin */}
      <div className="w-full lg:w-64 shrink-0">
        <div className="bg-zinc-900 border border-zinc-800 p-6 sticky top-32">
          <div className="mb-8">
            <span className="bg-primary-light/20 text-primary-light uppercase tracking-widest text-[10px] font-bold px-2 py-1 mb-2 inline-block">Mode Admin</span>
            <h2 className="font-display text-xl font-bold text-white">Veloir Admin</h2>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Vue d\'ensemble' },
              { id: 'products', icon: PackageSearch, label: 'Produits' },
              { id: 'orders', icon: ShoppingCart, label: 'Commandes' },
              { id: 'promo', icon: Tag, label: 'Codes Promo' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'bg-zinc-800 text-white border-l-2 border-primary-light' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50 border-l-2 border-transparent'
                }`}
              >
                <item.icon className="w-4 h-4 mr-3" /> {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Admin Content */}
      <div className="flex-grow">
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-display text-3xl font-bold text-white mb-8 border-b border-zinc-900 pb-4">Tableau de Bord</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((stat, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-6">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">{stat.title}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-white font-display">{stat.value}</span>
                    <span className="text-primary-light text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 h-96 flex items-center justify-center">
              <p className="text-zinc-600">[Graphique des revenus (Chart.js / Recharts)]</p>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-8">
              <h1 className="font-display text-3xl font-bold text-white">Gestion des Produits</h1>
              <button className="flex items-center px-4 py-2 bg-primary-light text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
                <Plus className="w-4 h-4 mr-2" /> Nouveau
              </button>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-950 text-zinc-400 uppercase tracking-widest text-xs">
                  <tr>
                    <th className="p-4 font-medium">Titre</th>
                    <th className="p-4 font-medium">Prix</th>
                    <th className="p-4 font-medium">Ventes</th>
                    <th className="p-4 font-medium">Statut</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300 divide-y divide-zinc-800">
                  <tr>
                    <td className="p-4 font-medium text-white">The Ultimate Creator Guide</td>
                    <td className="p-4">29.99 €</td>
                    <td className="p-4">124</td>
                    <td className="p-4"><span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs">Actif</span></td>
                    <td className="p-4 text-right">
                      <button className="text-primary-light hover:text-white transition-colors">Modifier</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'orders' || activeTab === 'promo') && (
          <div className="animate-fade-in flex items-center justify-center h-64 border border-zinc-800 bg-zinc-900/50 text-zinc-500">
            Section en cours de construction
          </div>
        )}
      </div>
    </div>
  );
}
