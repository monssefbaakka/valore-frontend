'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Swords, ChevronRight, User } from 'lucide-react';

export default function QuoteBattle() {
  const [gameState, setGameState] = useState({
    phase: 1,
    quotes: [],
    matches: [],
    finalists: [],
    winner: null
  });

  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('veloir_battle');
    if (saved) {
      try {
        setGameState(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse battle state", e);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('veloir_battle', JSON.stringify(gameState));
    }
  }, [gameState, isClient]);

  const submitQuote = (e) => {
    e.preventDefault();
    if (!newQuote.trim() || !newAuthor.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      text: newQuote,
      author: newAuthor,
      votes: 0
    };

    setGameState(prev => ({
      ...prev,
      quotes: [...prev.quotes, newEntry]
    }));
    setNewQuote('');
    setNewAuthor('');
  };

  const forceEndRound = () => {
    setGameState(prev => {
      if (prev.phase === 1) {
        // End phase 1, transition to phase 2
        let currentQuotes = [...prev.quotes];
        if (currentQuotes.length < 4) {
           currentQuotes.push({ id: 'm1', text: "FAILURE IS JUST INFORMATION.", author: "AURELIUS", votes: 0 });
           currentQuotes.push({ id: 'm2', text: "PAIN IS TEMPORARY, GLORY IS ETERNAL.", author: "DROGOW", votes: 0 });
           currentQuotes.push({ id: 'm3', text: "WE ARE NOT BORN STRONG, WE BECOME IT.", author: "FAN1", votes: 0 });
           currentQuotes.push({ id: 'm4', text: "SUCCESS IS THE ONLY REVENGE.", author: "FAN2", votes: 0 });
        }
        
        // Create random matches
        const shuffled = [...currentQuotes].sort(() => 0.5 - Math.random());
        const matches = [];
        for (let i = 0; i < shuffled.length - 1; i += 2) {
          matches.push({
            id: `match-${i}`,
            quoteA: shuffled[i],
            quoteB: shuffled[i+1],
            votesA: 0,
            votesB: 0
          });
        }
        
        return { ...prev, phase: 2, quotes: currentQuotes, matches };
      } 
      else if (prev.phase === 2) {
        // End phase 2, determine winners of matches
        let winners = prev.matches.map(m => m.votesA >= m.votesB ? m.quoteA : m.quoteB);
        
        if (winners.length > 4) winners = winners.slice(0, 4);
        while(winners.length < 4) {
           winners.push(prev.quotes[Math.floor(Math.random() * prev.quotes.length)]);
        }
        
        const finalists = winners.map(w => ({ ...w, votes: 0 }));
        return { ...prev, phase: 3, finalists };
      }
      else if (prev.phase === 3) {
        // End phase 3, pick winner
        let winner = prev.finalists.reduce((max, current) => (current.votes > max.votes ? current : max), prev.finalists[0]);
        return { ...prev, phase: 4, winner };
      }
      else {
        // Reset
        return { phase: 1, quotes: [], matches: [], finalists: [], winner: null };
      }
    });
  };

  const voteMatch = (matchId, choice) => {
    setGameState(prev => ({
      ...prev,
      matches: prev.matches.map(m => {
        if (m.id === matchId) {
          return {
            ...m,
            votesA: choice === 'A' ? m.votesA + 1 : m.votesA,
            votesB: choice === 'B' ? m.votesB + 1 : m.votesB
          };
        }
        return m;
      })
    }));
  };

  const voteFinalist = (finalistId) => {
    setGameState(prev => ({
      ...prev,
      finalists: prev.finalists.map(f => {
        if (f.id === finalistId) {
          return { ...f, votes: f.votes + 1 };
        }
        return f;
      })
    }));
  };

  if (!isClient) return null; // Prevent hydration errors

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-32 pb-24 font-sans selection:bg-purple-500/30">
      <div className="container mx-auto px-6 max-w-4xl relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Quote <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Battle</span>
          </h1>
          <p className="text-zinc-400 uppercase tracking-widest text-sm md:text-base font-semibold">
            {gameState.phase === 1 && "PHASE 1: SUBMISSIONS OPEN"}
            {gameState.phase === 2 && "PHASE 2: COMMUNITY VOTING"}
            {gameState.phase === 3 && "PHASE 3: GRAND FINALS (TOP 4)"}
            {gameState.phase === 4 && "PHASE 4: CHAMPION CROWNED"}
          </p>
        </div>

        {/* Phase 1 */}
        {gameState.phase === 1 && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="bg-black border border-[#1a1a1a] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900 via-zinc-800 to-black"></div>
              
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3">
                <Swords className="w-6 h-6 text-purple-500" /> Enter the Arena
              </h2>
              
              <form onSubmit={submitQuote} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Your Quote</label>
                  <textarea 
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder="Enter a legendary mindset quote..."
                    className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white p-4 focus:outline-none focus:border-purple-500/50 transition-colors uppercase font-bold tracking-wide min-h-[120px] resize-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Your Username</label>
                  <input 
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. DARK_KNIGHT"
                    className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white p-4 focus:outline-none focus:border-purple-500/50 transition-colors uppercase font-bold tracking-wide"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                  Submit Quote <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="text-center text-zinc-500 text-sm uppercase tracking-widest font-semibold mt-8">
              {gameState.quotes.length} Quotes Submitted So Far
            </div>
          </div>
        )}

        {/* Phase 2 */}
        {gameState.phase === 2 && (
          <div className="space-y-12 animate-in fade-in duration-700">
            {gameState.matches.map((match) => (
              <div key={match.id} className="relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#0d0d0d] p-4 rounded-full border border-[#1a1a1a]">
                  <span className="text-zinc-600 font-black italic">VS</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => voteMatch(match.id, 'A')}
                    className="bg-black border border-[#1a1a1a] p-8 text-left hover:border-purple-500/30 transition-all relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl font-black uppercase tracking-wide leading-tight mb-6">"{match.quoteA.text}"</p>
                      <div className="flex items-center justify-between text-sm uppercase tracking-widest text-zinc-500">
                        <span className="flex items-center gap-2"><User className="w-4 h-4"/> {match.quoteA.author}</span>
                        <span className="text-purple-400 font-bold">{match.votesA} VOTES</span>
                      </div>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => voteMatch(match.id, 'B')}
                    className="bg-black border border-[#1a1a1a] p-8 text-left hover:border-purple-500/30 transition-all relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl font-black uppercase tracking-wide leading-tight mb-6">"{match.quoteB.text}"</p>
                      <div className="flex items-center justify-between text-sm uppercase tracking-widest text-zinc-500">
                        <span className="flex items-center gap-2"><User className="w-4 h-4"/> {match.quoteB.author}</span>
                        <span className="text-purple-400 font-bold">{match.votesB} VOTES</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Phase 3 */}
        {gameState.phase === 3 && (
          <div className="space-y-6 animate-in fade-in duration-700">
            <h2 className="text-center text-xl font-bold uppercase tracking-widest text-purple-500 mb-10">Vote for the ultimate quote</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gameState.finalists.map((finalist) => (
                <button 
                  key={finalist.id}
                  onClick={() => voteFinalist(finalist.id)}
                  className="bg-black border border-[#1a1a1a] p-8 text-left hover:border-yellow-500/30 transition-all group relative"
                >
                  <p className="text-lg md:text-xl font-black uppercase tracking-wide leading-tight mb-6 text-white group-hover:text-yellow-50 transition-colors">
                    "{finalist.text}"
                  </p>
                  <div className="flex items-center justify-between text-sm uppercase tracking-widest text-zinc-500">
                    <span className="flex items-center gap-2"><User className="w-4 h-4"/> {finalist.author}</span>
                    <span className="text-yellow-500 font-bold">{finalist.votes} VOTES</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Phase 4 */}
        {gameState.phase === 4 && gameState.winner && (
          <div className="animate-in fade-in duration-1000">
            <div className="bg-black border border-yellow-500/30 p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <Trophy className="w-20 h-20 text-yellow-500 mb-8" />
                <h2 className="text-sm uppercase tracking-widest text-yellow-500 font-bold mb-6">Grand Champion</h2>
                
                <p className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8">
                  "{gameState.winner.text}"
                </p>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] border border-[#333] rounded-full uppercase tracking-widest text-sm font-bold text-zinc-300">
                  <User className="w-4 h-4 text-zinc-500" /> {gameState.winner.author}
                </div>
                
                <div className="mt-12 text-zinc-400 uppercase tracking-widest text-xs font-semibold bg-[#0d0d0d] px-6 py-4 border border-[#1a1a1a]">
                  WINNER GETS FEATURED IN A DROGOW VIDEO
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Admin Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-red-900/30 p-4 z-50 flex justify-between items-center px-6">
        <div className="text-red-500 text-xs font-black uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> ADMIN MODE
        </div>
        <button 
          onClick={forceEndRound}
          className="bg-red-950 hover:bg-red-900 text-red-200 text-xs font-bold uppercase tracking-widest px-4 py-2 border border-red-800/50 transition-colors"
        >
          {gameState.phase === 4 ? "Reset Battle" : "Force End Round"}
        </button>
      </div>
    </div>
  );
}
