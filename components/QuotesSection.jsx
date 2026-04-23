'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Quote, Plus, X, Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getAllQuotes, createQuote } from '../services/api';

const STATIC_QUOTES = [
  { id: 's1', text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius", category: "Stoicism" },
  { id: 's2', text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn", category: "Discipline" },
  { id: 's3', text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus", category: "Stoicism" },
];

export default function QuotesSection() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const [quotes, setQuotes] = useState(STATIC_QUOTES);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuote, setNewQuote] = useState({ text: '', author: '', category: 'Mindset' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    setLoading(true);
    const backendQuotes = await getAllQuotes();
    setQuotes([...STATIC_QUOTES, ...backendQuotes]);
    setLoading(false);
  };

  const handleAddQuoteClick = () => {
    if (!session) {
      router.push('/login');
      return;
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newQuote.text || !newQuote.author) return;

    setIsSubmitting(true);
    try {
      await createQuote(newQuote, session.accessToken);
      setNewQuote({ text: '', author: '', category: 'Mindset' });
      setIsModalOpen(false);
      fetchQuotes(); // Refresh
    } catch (error) {
      alert("Error adding quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = ['All', 'Stoicism', 'Discipline', 'Work', 'Mindset', 'Inspiration'];

  const filteredQuotes = quotes.filter(q => {
    const matchesSearch = q.text.toLowerCase().includes(search.toLowerCase()) || q.author.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || q.category === filter;
    return matchesSearch && matchesFilter;
  });

  const styles = {
    container: { backgroundColor: '#0d0d0d', minHeight: '100vh', color: 'white', paddingTop: '8rem', paddingBottom: '6rem' },
    card: { backgroundColor: '#000', border: '1px solid #1a1a1a', padding: '2.5rem', transition: 'all 0.3s ease', position: 'relative' },
    title: { fontSize: '4rem', fontWeight: '900', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' },
    filterBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(24, 24, 27, 0.5)', padding: '1rem', border: '1px solid #27272a', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' },
    button: (active) => ({ padding: '0.5rem 1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1rem', backgroundColor: active ? 'white' : '#27272a', color: active ? 'black' : '#a1a1aa', border: 'none', cursor: 'pointer', fontWeight: active ? 'bold' : 'normal' }),
    input: { backgroundColor: '#050505', border: '1px solid #27272a', color: 'white', padding: '0.75rem 0.75rem 0.75rem 2.5rem', outline: 'none', width: '250px' },
    addBtn: { backgroundColor: 'white', color: 'black', padding: '0.75rem 1.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto 3rem auto', transition: 'transform 0.2s' },
    modalOverlay: { position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' },
    modalContent: { backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a', width: '100%', maxWidth: '500px', padding: '2.5rem', position: 'relative' }
  };

  return (
    <div style={styles.container}>
      <div className="container mx-auto px-6">
        <h1 style={styles.title} className="font-display">Mindset</h1>
        <p className="text-zinc-500 text-center mb-8 uppercase tracking-[0.3em] text-sm">Philosophical Wisdom & Creative Fuel</p>
        
        <button 
          onClick={handleAddQuoteClick}
          style={styles.addBtn}
          className="hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" /> Add Your Voice
        </button>
        
        <div style={styles.filterBar}>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            <Filter className="w-5 h-5 text-zinc-500 mr-2 self-center" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={styles.button(filter === cat)}>{cat}</button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1rem', color: '#71717a' }} />
            <input type="text" placeholder="SEARCH..." style={styles.input} value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-24"><Loader2 className="animate-spin w-12 h-12 text-zinc-700" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredQuotes.map(quote => (
              <div key={quote.id} style={styles.card} className="hover:border-zinc-500 group">
                <Quote className="w-8 h-8 text-zinc-800 mb-6 group-hover:text-primary-light transition-colors" />
                <p className="text-xl md:text-2xl font-bold uppercase leading-tight mb-8">"{quote.text}"</p>
                <div className="flex justify-between items-center border-t border-zinc-900 pt-6">
                  <span className="text-xs tracking-widest text-zinc-500 uppercase">{quote.author}</span>
                  <span className="text-[10px] px-2 py-1 bg-zinc-900 text-zinc-400 uppercase tracking-tighter">{quote.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} className="text-zinc-500 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-zinc-900 pb-4">New Thought</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">The Message</label>
                <textarea 
                  required
                  placeholder="TYPE YOUR QUOTE..." 
                  style={{ backgroundColor: '#000', border: '1px solid #1a1a1a', padding: '1rem', color: 'white', minHeight: '120px', outline: 'none' }}
                  value={newQuote.text}
                  onChange={e => setNewQuote({...newQuote, text: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Author</label>
                <input 
                  required
                  type="text" 
                  placeholder="NAME OR ANONYMOUS" 
                  style={{ backgroundColor: '#000', border: '1px solid #1a1a1a', padding: '1rem', color: 'white', outline: 'none' }}
                  value={newQuote.author}
                  onChange={e => setNewQuote({...newQuote, author: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Category</label>
                <select 
                  style={{ backgroundColor: '#000', border: '1px solid #1a1a1a', padding: '1rem', color: 'white', outline: 'none' }}
                  value={newQuote.category}
                  onChange={e => setNewQuote({...newQuote, category: e.target.value})}
                >
                  {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <button 
                disabled={isSubmitting}
                type="submit" 
                style={{ ...styles.addBtn, margin: '1rem 0 0 0', justifyContent: 'center', width: '100%' }}
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Publish Wisdom"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
