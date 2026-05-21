import React from 'react';
import { Clock } from 'lucide-react';

export default function News() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title">News & Highlights</h1>

        <div className="glass-panel" style={{ padding: '60px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '800px', margin: '0 auto', gap: '16px' }}>
          <Clock size={48} color="var(--accent-primary)" style={{ opacity: 0.8 }} />
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>Coming Soon</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px' }}>
            We are currently gathering our latest news and highlights. Please check back later!
          </p>
        </div>
      </div>
    </div>
  );
}
