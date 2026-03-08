import React from 'react';
import { news } from '../data/news';
import { Calendar } from 'lucide-react';

export default function News() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">News & Highlights</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
          {news.map(item => (
            <div key={item.id} className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', minWidth: '100px' }}>
                <Calendar color="var(--accent-primary)" size={24} style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>{item.date}</span>
              </div>
              <div>
                <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '8px' }}>
                  {item.type}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
