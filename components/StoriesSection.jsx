'use client';

export default function StoriesSection() {
  const stories = [
    { id: 1, title: 'OVERCOMING THE PLATEAU', author: 'ALEX M.', content: '"I was stuck at the same level for years. Drogow gave me the blueprint to break through."' },
    { id: 2, title: 'BUILDING FROM SCRATCH', author: 'SARAH K.', content: '"No audience, no product. Now I am running a 6-figure studio. The mindset shift was everything."' },
    { id: 3, title: 'THE ART OF DISCIPLINE', author: 'MARCUS T.', content: '"It is not about motivation. It is about systems. This completely rewired how I work."' },
  ];

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#ffffff', padding: '120px 24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '60px', textAlign: 'center' }}>
          Success Stories
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {stories.map(story => (
            <div key={story.id} style={{ backgroundColor: '#000000', border: '1px solid #1a1a1a', padding: '40px', borderRadius: '8px', transition: 'transform 0.3s ease' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>{story.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#a1a1aa', marginBottom: '24px', fontStyle: 'italic' }}>{story.content}</p>
              <div style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff' }}>— {story.author}</div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#000000', border: '1px solid #1a1a1a', padding: '48px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', textAlign: 'center' }}>
            Submit Your Story
          </h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                style={{ width: '100%', backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a', color: '#ffffff', padding: '16px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', outline: 'none' }}
              />
            </div>
            <div>
              <textarea 
                placeholder="YOUR EXPERIENCE..." 
                rows="4"
                style={{ width: '100%', backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a', color: '#ffffff', padding: '16px', borderRadius: '4px', resize: 'vertical', outline: 'none' }}
              />
            </div>
            <button 
              type="button" 
              style={{ padding: '16px 32px', backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px', cursor: 'pointer', border: 'none', width: '100%' }}
            >
              Send Submission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
