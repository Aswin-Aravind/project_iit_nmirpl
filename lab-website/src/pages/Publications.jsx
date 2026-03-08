import React, { useState } from 'react';
import { publications } from '../data/publications';
import { ExternalLink, BookOpen, FileText } from 'lucide-react';
import './Publications.css';

export default function Publications() {
  const [filter, setFilter] = useState('all');

  const filteredPubs = filter === 'all'
    ? publications
    : publications.filter(p => p.type === filter);

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Publications & Patents</h1>

        <div className="pub-filters" style={{ marginBottom: '32px', display: 'flex', gap: '16px' }}>
          <button className={`btn-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`btn-filter ${filter === 'journal' ? 'active' : ''}`} onClick={() => setFilter('journal')}>Journals</button>
          <button className={`btn-filter ${filter === 'conference' ? 'active' : ''}`} onClick={() => setFilter('conference')}>Conferences</button>
        </div>

        <div className="pub-list">
          {filteredPubs.map(pub => (
            <div key={pub.id} className="pub-card glass-panel" style={{ padding: '24px', marginBottom: '16px', display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-primary)', paddingTop: '4px' }}>
                {pub.type === 'journal' ? <BookOpen size={24} /> : <FileText size={24} />}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{pub.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>{pub.authors}</p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <span style={{ fontStyle: 'italic' }}>{pub.journal}</span>
                  <span><strong>{pub.year}</strong></span>
                </div>
              </div>
              {pub.doi && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                    DOI <ExternalLink size={14} style={{ marginLeft: '6px' }} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
