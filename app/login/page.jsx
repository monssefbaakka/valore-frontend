'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isLogin) {
      const res = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        setError('Email ou mot de passe incorrect');
        setLoading(false);
      } else {
        router.push(callbackUrl);
      }
    } else {
      // Manual registration call
      try {
        const res = await fetch('http://localhost:8080/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (res.ok) {
          // Immediately login
          const loginRes = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password,
          });
          if (!loginRes?.error) {
            router.push(callbackUrl);
          }
        } else {
          setError("L'inscription a échoué. Cet email est peut-être déjà utilisé.");
        }
      } catch (err) {
        setError("Erreur serveur.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900/50 p-8 border border-zinc-800 backdrop-blur">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl font-bold text-white uppercase tracking-widest mb-2">
            {isLogin ? 'Connexion' : 'Inscription'}
          </h1>
          <p className="text-zinc-500 text-sm">
            {isLogin ? 'Accédez à votre espace membre' : 'Rejoignez la communauté Veloir'}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Prénom</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 focus:outline-none focus:border-primary-light" 
                  value={formData.firstname}
                  onChange={e => setFormData({...formData, firstname: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Nom</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 focus:outline-none focus:border-primary-light" 
                  value={formData.lastname}
                  onChange={e => setFormData({...formData, lastname: e.target.value})}
                />
              </div>
            </div>
          )}
          <div>
            <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 focus:outline-none focus:border-primary-light" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Mot de passe</label>
            <input 
              type="password" 
              required
              className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 focus:outline-none focus:border-primary-light" 
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black py-4 mt-4 uppercase font-bold tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Patientez...' : (isLogin ? 'Se connecter' : "S'inscrire")}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-zinc-800 pt-6">
          <p className="text-zinc-500 text-sm">
            {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-white hover:text-primary-light ml-2 font-semibold transition-colors"
            >
              {isLogin ? "S'inscrire" : "Se connecter"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
