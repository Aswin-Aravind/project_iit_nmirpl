import React from 'react';
import { Mail, Award, BookOpen, GraduationCap } from 'lucide-react';
import { members } from '../data/members';
import './PI.css';

export default function PI() {
  const { pi } = members;

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Principal Investigator</h1>

        <div className="pi-container glass-panel">
          <div className="pi-header">
            <div className="pi-image-wrapper">
              <img src={pi.image} alt={pi.name} className="pi-image" />
            </div>

            <div className="pi-info">
              <h2>{pi.name}</h2>
              <h3 className="pi-title">{pi.role}</h3>
              <div className="pi-contact">
                <a href={`mailto:${pi.email}`} className="btn-primary" style={{ padding: '8px 16px' }}>
                  <Mail size={16} /> Contact PI
                </a>
              </div>
            </div>
          </div>

          <div className="pi-body">
            <div className="pi-bio">
              <h3>Biography</h3>
              <p>{pi.bio}</p>
            </div>

            <div className="pi-grid">
              <div className="pi-card glass-panel">
                <div className="pi-card-header">
                  <TargetIcon /> <h4>Research Interests</h4>
                </div>
                <ul>
                  {pi.researchInterests.map((interest, idx) => (
                    <li key={idx}>{interest}</li>
                  ))}
                </ul>
              </div>

              <div className="pi-card glass-panel" style={{ background: 'var(--bg-secondary)' }}>
                <div className="pi-card-header">
                  <Award className="pi-card-icon" /> <h4>Select Awards</h4>
                </div>
                <ul>
                  <li>DST INSPIRE Faculty Award</li>
                  <li>Early Career Research Grant</li>
                  <li>SPIE Optics Finalist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TargetIcon() {
  return <Award className="pi-card-icon" />;
}
