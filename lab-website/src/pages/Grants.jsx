import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Activity, X } from 'lucide-react';

export default function Grants() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          <Link 
            to="/research" 
            style={{ 
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
              width: '40px', height: '40px', 
              background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', 
              borderRadius: '50%', textDecoration: 'none', 
              transition: 'all 0.2s' 
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)'; }}
          >
            <X size={24} />
          </Link>
          <h1 className="section-title" style={{ margin: 0 }}>Projects & Grants</h1>
        </div>
        <p className="lead-text" style={{ marginBottom: '40px' }}>
          Our research is generously supported by national and international funding agencies.
        </p>

        <div className="projects-list">
          {projects.map(proj => (
            <div key={proj.id} className="glass-panel" style={{ padding: '32px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <Activity size={24} color="var(--accent-primary)" />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{proj.title}</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', color: 'var(--text-secondary)' }}>
                <div>
                  <p><strong>Funding Agency:</strong> {proj.agency}</p>
                  <p><strong>Duration:</strong> {proj.duration}</p>
                </div>
                <div>
                  <p><strong>Collaborators:</strong> {proj.collaborators}</p>
                  <p><strong>Status:</strong> <span style={{ color: proj.status === 'ongoing' ? '#4ade80' : '#94a3b8', textTransform: 'capitalize' }}>{proj.status}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
