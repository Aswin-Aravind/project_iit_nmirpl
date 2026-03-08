import React from 'react';
import { members } from '../data/members';
import { Mail } from 'lucide-react';

export default function People() {
  const { phd, postdocs, masters, alumni } = members;

  const renderGroup = (title, group) => {
    if (!group || group.length === 0) return null;
    return (
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '32px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px', color: 'var(--text-primary)' }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {group.map((member, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--glass-border)' }}>
                <img src={member.image || 'https://via.placeholder.com/150'} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{member.name}</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '12px', fontWeight: '500' }}>{member.role}</p>
              {member.researchTopic && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.4' }}>{member.researchTopic}</p>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'var(--transition)' }}>
                  <Mail size={16} /> {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Our Team</h1>

        {renderGroup("Postdoctoral Researchers", postdocs)}
        {renderGroup("PhD Scholars", phd)}
        {renderGroup("Masters Students", masters)}
        {renderGroup("Alumni", alumni)}
      </div>
    </div>
  );
}
