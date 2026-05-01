'use client';

import { useEffect, useState, useRef } from 'react';

function generateStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      animDuration: Math.random() * 4 + 2,
      animDelay: Math.random() * 5,
    });
  }
  return stars;
}

export default function StoriesSection() {
  const [mounted, setMounted] = useState(false);
  const [stars] = useState(() => generateStars(220));

  useEffect(() => {
    setMounted(true);
  }, []);

  const stories = [
    { id: 1, title: 'OVERCOMING THE PLATEAU', author: 'ALEX M.', content: '"I was stuck at the same level for years. Drogow gave me the blueprint to break through."', planet: '🪐' },
    { id: 2, title: 'BUILDING FROM SCRATCH', author: 'SARAH K.', content: '"No audience, no product. Now I am running a 6-figure studio. The mindset shift was everything."', planet: '🌍' },
    { id: 3, title: 'THE ART OF DISCIPLINE', author: 'MARCUS T.', content: '"It is not about motivation. It is about systems. This completely rewired how I work."', planet: '⭐' },
  ];

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#02020f',
      color: '#ffffff',
      padding: '120px 24px 160px',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      overflow: 'hidden',
      minHeight: '100vh',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');

        @keyframes starTwinkle {
          0%, 100% { opacity: var(--op, 0.5); transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-25px) rotate(var(--rot, 0deg)); }
        }
        @keyframes floatYSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitRing {
          from { transform: rotateX(75deg) rotate(0deg); }
          to { transform: rotateX(75deg) rotate(360deg); }
        }
        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.28; transform: scale(1.05); }
        }
        @keyframes shootStar {
          0% { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 1; width: 120px; }
          100% { transform: translateX(-900px) translateY(400px) rotate(-35deg); opacity: 0; width: 0px; }
        }
        @keyframes cardGlow {
          0%, 100% { box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 0px rgba(160,120,255,0); }
          50% { box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(160,120,255,0.12); }
        }
        @keyframes satelliteOrbit {
          from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }
        .story-card:hover {
          transform: translateY(-14px) scale(1.02) !important;
          border-color: rgba(160,120,255,0.5) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(160,120,255,0.18) !important;
        }
        .story-card { transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; }
        .submit-btn:hover {
          transform: translateY(-3px) scale(1.03) !important;
          box-shadow: 0 12px 35px rgba(100,60,220,0.65) !important;
        }
        .cosmic-input:focus {
          border-color: rgba(160,120,255,0.7) !important;
          box-shadow: 0 0 15px rgba(160,120,255,0.25) !important;
          outline: none;
        }
      `}</style>

      {/* ─── Dense Starfield ─── */}
      {mounted && stars.map(s => (
        <div key={s.id} style={{
          position: 'absolute',
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          borderRadius: '50%',
          backgroundColor: s.size > 2 ? '#e8d8ff' : '#ffffff',
          '--op': s.opacity,
          opacity: s.opacity,
          animation: `starTwinkle ${s.animDuration}s ${s.animDelay}s ease-in-out infinite`,
          boxShadow: s.size > 1.8 ? `0 0 ${s.size * 3}px rgba(220,200,255,0.8)` : 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      ))}

      {/* ─── Shooting Star ─── */}
      {mounted && (
        <div style={{
          position: 'absolute', top: '8%', right: '5%',
          height: '2px', background: 'linear-gradient(90deg, #ffffff, rgba(255,255,255,0))',
          borderRadius: '2px',
          animation: 'shootStar 7s 1.5s linear infinite',
          pointerEvents: 'none', zIndex: 0,
          boxShadow: '0 0 8px #fff, 0 0 20px rgba(200,180,255,0.5)',
        }} />
      )}

      {/* ─── Nebula Background Glows ─── */}
      <div style={{
        position: 'absolute', top: '0%', left: '-10%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(80,40,160,0.25) 0%, transparent 70%)',
        animation: 'nebulaPulse 12s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20,60,140,0.22) 0%, transparent 70%)',
        animation: 'nebulaPulse 16s 4s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ─── PLANET 1: Saturn-like (top right) ─── */}
      <div style={{
        position: 'absolute', top: '4%', right: '7%',
        width: '160px', height: '160px',
        animation: 'floatY 9s ease-in-out infinite',
        '--rot': '0deg',
        pointerEvents: 'none', zIndex: 1,
      }}>
        {/* Planet body with spin */}
        <div style={{
          width: '160px', height: '160px', borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #f5e0c0 0%, #d4a96a 30%, #b07840 55%, #7a4e2a 80%, #3d2010 100%)',
          boxShadow: '8px 12px 40px rgba(0,0,0,0.7), inset -25px -20px 40px rgba(0,0,0,0.5), inset 10px 8px 20px rgba(255,220,160,0.25)',
          position: 'relative',
          animation: 'spin 20s linear infinite',
          transformStyle: 'preserve-3d',
          zIndex: 2,
        }}>
          {/* Planet surface bands */}
          {[22, 40, 58, 74].map((top, i) => (
            <div key={i} style={{
              position: 'absolute', left: '8%', right: '8%',
              top: `${top}%`, height: `${4 + i}px`,
              borderRadius: '50%',
              backgroundColor: i % 2 === 0 ? 'rgba(180,120,60,0.3)' : 'rgba(255,200,100,0.15)',
            }} />
          ))}
        </div>
        {/* Saturn rings */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '250px', height: '60px',
          marginLeft: '-125px', marginTop: '-30px',
          borderRadius: '50%',
          border: '12px solid transparent',
          borderTop: '12px solid rgba(210,170,100,0.55)',
          borderBottom: '12px solid rgba(210,170,100,0.55)',
          transform: 'rotateX(72deg)',
          boxShadow: '0 0 0 6px rgba(180,140,80,0.3), 0 0 0 14px rgba(160,120,60,0.15)',
          zIndex: 1,
        }} />
        {/* Ring shadow on planet */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '250px', height: '60px',
          marginLeft: '-125px', marginTop: '-30px',
          borderRadius: '50%',
          border: '2px solid rgba(60,40,10,0.4)',
          transform: 'rotateX(72deg)',
          zIndex: 3,
        }} />
      </div>

      {/* ─── PLANET 2: Earth-like (left middle) ─── */}
      <div style={{
        position: 'absolute', top: '38%', left: '3%',
        width: '110px', height: '110px',
        animation: 'floatYSlow 12s 3s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 1,
      }}>
        {/* Earth‑like planet with realistic continents */}
        <div style={{
          width: '110px', height: '110px', borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #8be0f8 0%, #2a8fd4 20%, #1a5fa0 40%, #0a2a18 70%),
                       radial-gradient(circle at 70% 70%, #3d7cb0 0%, #1a5fa0 50%, transparent 80%)`,
          boxShadow: '5px 8px 30px rgba(0,0,0,0.7), inset -18px -14px 30px rgba(0,0,0,0.55), inset 8px 6px 15px rgba(150,230,255,0.2)',
          position: 'relative',
          animation: 'spin 30s linear infinite',
          transformStyle: 'preserve-3d',
        }}>
          {/* Cloud layer */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'radial-gradient(ellipse at 60% 25%, rgba(255,255,255,0.25) 0%, transparent 45%), radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 30%)',
          }} />
          {/* Atmosphere halo */}
          <div style={{
            position: 'absolute', inset: '-6px', borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 30%, rgba(80,180,255,0.15) 0%, transparent 65%)',
            boxShadow: '0 0 20px rgba(60,140,255,0.3)',
          }} />
        </div>
        {/* Small moon orbiting */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '14px', height: '14px',
          marginLeft: '-7px', marginTop: '-7px',
          animation: 'satelliteOrbit 8s linear infinite',
        }}>
          <div style={{
            width: '14px', height: '14px', borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, #e0dcd0, #a8a090)',
            boxShadow: '2px 3px 8px rgba(0,0,0,0.6)',
          }} />
        </div>
      </div>

      {/* ─── PLANET 3: Mars-like (bottom right) ─── */}
      <div style={{
        position: 'absolute', bottom: '15%', right: '5%',
        width: '80px', height: '80px',
        animation: 'floatY 10s 6s ease-in-out infinite',
        '--rot': '0deg',
        pointerEvents: 'none', zIndex: 1,
      }}>
        {/* Mars‑like planet with subtle texture */}
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #c95230 0%, #9a3a1a 35%, #5a1e08 70%)',
          boxShadow: '4px 6px 20px rgba(0,0,0,0.7), inset -12px -10px 20px rgba(0,0,0,0.5)',
          position: 'relative',
          animation: 'spin 25s linear infinite',
          transformStyle: 'preserve-3d',
        }}>
          {/* Surface details */}
          <div style={{
            position: 'absolute', top: '20%', left: '25%',
            width: '30%', height: '20%', borderRadius: '50%',
            background: 'rgba(0,0,0,0.15)',
          }} />
          <div style={{
            position: 'absolute', bottom: '25%', right: '20%',
            width: '20%', height: '15%', borderRadius: '50%',
            background: 'rgba(0,0,0,0.1)',
          }} />
        </div>
      </div>

      {/* ─── PLANET 4: Ice/Neptune-like (top left) ─── */}
      <div style={{
        position: 'absolute', top: '12%', left: '15%',
        width: '55px', height: '55px',
        animation: 'floatYSlow 14s 2s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 1,
      }}>
        {/* Ice/Neptune‑like planet with subtle glow */}
        <div style={{
          width: '55px', height: '55px', borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #a0d8f8 0%, #3090d0 30%, #1050a0 60%, #082050 100%)',
          boxShadow: '3px 4px 15px rgba(0,0,0,0.7), inset -8px -6px 15px rgba(0,0,0,0.55), 0 0 15px rgba(60,140,255,0.2)',
          animation: 'floatYSlow 12s ease-in-out infinite',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* ─── Main Content ─── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ─── Header ─── */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.4em', color: 'rgba(200,170,255,0.7)', textTransform: 'uppercase', marginBottom: '16px' }}>
            ✦ COSMIC EXPLORATION ✦
          </p>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '20px',
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #c8a8ff 0%, #ffffff 45%, #8ad4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Constellation of Success
          </h1>
          <div style={{
            width: '80px', height: '2px', margin: '0 auto 20px',
            background: 'linear-gradient(90deg, transparent, rgba(180,140,255,0.8), transparent)',
          }} />
          <p style={{ color: 'rgba(180,180,200,0.75)', fontSize: '1.1rem', letterSpacing: '0.03em', maxWidth: '500px', margin: '0 auto' }}>
            Discover the magical journeys of those who reached the stars.
          </p>
        </div>

        {/* ─── Story Cards ─── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '80px' }}>
          {stories.map((story, idx) => (
            <div key={story.id} className="story-card" style={{
              backgroundColor: 'rgba(12,10,30,0.65)',
              border: '1px solid rgba(160,120,255,0.18)',
              padding: '36px 32px',
              borderRadius: '20px',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden',
              animation: `cardGlow ${5 + idx}s ease-in-out infinite`,
            }}>
              {/* Top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(180,140,255,0.6), transparent)',
              }} />
              {/* Corner shimmer */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '100px', height: '100px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(140,100,255,0.15), transparent 70%)',
              }} />

              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{story.planet}</div>
              <h3 style={{
                fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase',
                letterSpacing: '0.1em', marginBottom: '16px',
                color: 'rgba(220,200,255,0.95)',
              }}>{story.title}</h3>
              <p style={{
                fontSize: '1rem', lineHeight: '1.75', color: 'rgba(190,185,210,0.85)',
                marginBottom: '28px', fontStyle: 'italic',
                fontWeight: '300',
              }}>{story.content}</p>
              <div style={{
                fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'rgba(200,170,255,0.9)',
                borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '18px',
              }}>— {story.author}</div>
            </div>
          ))}
        </div>

        {/* ─── Submission Form ─── */}
        <div style={{
          backgroundColor: 'rgba(10,8,28,0.7)',
          border: '1px solid rgba(160,120,255,0.2)',
          padding: '52px 48px',
          borderRadius: '24px',
          maxWidth: '580px',
          margin: '0 auto',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(60,20,120,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Top decorative glow line */}
          <div style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(180,140,255,0.7), transparent)',
          }} />
          {/* Background nebula inside form */}
          <div style={{
            position: 'absolute', top: '-50px', right: '-50px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(80,40,160,0.2), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ textAlign: 'center', marginBottom: '36px', position: 'relative' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🛸</div>
            <h2 style={{
              fontSize: '1.4rem', fontWeight: '700', textTransform: 'uppercase',
              letterSpacing: '0.1em', marginBottom: '10px', color: '#e0d0ff',
            }}>
              Add Your Star to the Sky
            </h2>
            <p style={{ color: 'rgba(170,160,190,0.75)', fontSize: '0.9rem', letterSpacing: '0.02em' }}>
              Share your magical journey with the universe.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            <input
              type="text"
              placeholder="YOUR NAME"
              className="cosmic-input"
              style={{
                width: '100%', backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(160,120,255,0.25)', color: '#ffffff',
                padding: '15px 18px', borderRadius: '12px',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                outline: 'none', fontSize: '0.85rem',
                transition: 'all 0.3s ease', boxSizing: 'border-box',
              }}
            />
            <textarea
              placeholder="YOUR EXPERIENCE..."
              rows="4"
              className="cosmic-input"
              style={{
                width: '100%', backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(160,120,255,0.25)', color: '#ffffff',
                padding: '15px 18px', borderRadius: '12px',
                resize: 'vertical', outline: 'none', fontSize: '0.9rem',
                lineHeight: '1.6', transition: 'all 0.3s ease',
                boxSizing: 'border-box', fontFamily: 'inherit',
              }}
            />
            <button
              type="button"
              className="submit-btn"
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #5a20b0 0%, #7c3aed 50%, #4a18a0 100%)',
                color: '#ffffff', fontWeight: '700',
                textTransform: 'uppercase', letterSpacing: '0.15em',
                borderRadius: '12px', cursor: 'pointer', border: 'none',
                width: '100%', fontSize: '0.85rem',
                boxShadow: '0 6px 20px rgba(100,60,220,0.45)',
                transition: 'all 0.3s ease',
              }}
            >
              Send Transmission &nbsp;🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
