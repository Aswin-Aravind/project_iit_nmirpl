import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Mail, GraduationCap, Briefcase, Code, MapPin, X, Trophy, Activity, Users } from 'lucide-react';
import { members } from '../data/members';
import './PI.css';

export default function PI() {
  const { pi } = members;
  const [activeTab, setActiveTab] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Basic detection for desktop
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setIsDesktop(!isMobileDevice);
  }, []);

  const openModal = (tab) => setActiveTab(tab);
  const closeModal = () => setActiveTab(null);

  const sections = [
    { id: 'education', icon: GraduationCap, title: 'Education', content: (
      <ul style={{ padding: '0 0 0 24px', margin: 0, listStyleType: 'disc' }}>
        {pi.education && pi.education.map((edu, idx) => (
          <li key={idx} style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
            <strong style={{ fontSize: '1.1rem' }}>{edu.degree}</strong><br/>
            <span style={{ fontSize: '0.95em', color: 'var(--text-secondary)' }}>{edu.institution} ({edu.year})</span>
          </li>
        ))}
      </ul>
    )},
    { id: 'work', icon: Briefcase, title: 'Work Experience', content: (
      <ul style={{ padding: '0 0 0 24px', margin: 0, listStyleType: 'disc' }}>
        {pi.workExperience && pi.workExperience.map((exp, idx) => (
          <li key={idx} style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
            <strong style={{ fontSize: '1.1rem' }}>{exp.role}</strong><br/>
            <span style={{ fontSize: '0.95em', color: 'var(--text-secondary)' }}>{exp.institution} <br/> {exp.period}</span>
          </li>
        ))}
      </ul>
    )},
    { id: 'skills', icon: Code, title: 'Skills & Expertise', content: (
      <ul style={{ padding: '0', margin: 0, listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {pi.skills && pi.skills.map((skill, idx) => (
          <li key={idx} style={{ 
            background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)', 
            color: '#fff', 
            padding: '12px 20px', 
            borderRadius: '12px', 
            fontSize: '1.05rem', 
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(185, 28, 28, 0.3)' 
          }}>
            {skill}
          </li>
        ))}
      </ul>
    )},
    { id: 'achievements', icon: Trophy, title: 'Achievements', content: (
      <ul style={{ padding: '0 0 0 24px', margin: 0, listStyleType: 'disc' }}>
        {pi.achievements && pi.achievements.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {item}
          </li>
        ))}
      </ul>
    )},
    { id: 'memberships', icon: Users, title: 'Memberships', content: (
      <ul style={{ padding: '0 0 0 24px', margin: 0, listStyleType: 'disc' }}>
        {pi.memberships && pi.memberships.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {item}
          </li>
        ))}
      </ul>
    )},
    { id: 'activities', icon: Activity, title: 'Activities', content: (
      <ul style={{ padding: '0 0 0 24px', margin: 0, listStyleType: 'disc' }}>
        {pi.activities && pi.activities.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {item}
          </li>
        ))}
      </ul>
    )}
  ];

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '140px' }}>
      <div className="container">
        <h1 className="section-title" style={{ marinBottom: '40px' }}>Principal Investigator</h1>

        <div className="pi-container glass-panel">
          <div className="pi-header">
            <div className="pi-image-wrapper">
              <img src={pi.image} alt={pi.name} className="pi-image" />
            </div>

            <div className="pi-info">
              <h2>{pi.name}</h2>
              <h3 className="pi-title" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                <a href="https://opc.iitd.ac.in/faculty/prof-gayathri-bharathan" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', borderBottom: '1px solid rgba(0,0,0,0.1)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                  {pi.role} — {pi.title} (Optics and Photonics Center, IIT Delhi)
                </a>
              </h3>
            </div>
          </div>

          <div className="pi-body">
            <div className="pi-bio" style={{ marginBottom: '40px' }}>
              <h3>Professional Summary</h3>
              {pi.bio.split("\n").map((para, i) => (
                <p key={i} style={{ marginBottom: '14px', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>

            <h3 style={{ marginBottom: '20px', fontSize: '1.4rem' }}>Detailed Profile</h3>
            <div className="pi-accordion-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
              {sections.map(section => {
                const Icon = section.icon;
                return (
                  <button 
                    key={section.id}
                    onClick={() => openModal(section.id)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      width: '100%', padding: '28px 24px', border: '2px solid rgba(239, 68, 68, 0.3)',
                      background: 'rgba(239, 68, 68, 0.08)', borderRadius: '16px',
                      cursor: 'pointer', transition: 'all 0.3s ease',
                      boxShadow: '0 4px 16px rgba(239, 68, 68, 0.05)',
                      color: 'var(--text-primary)', textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(239, 68, 68, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(239, 68, 68, 0.05)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ padding: '12px', background: 'rgba(255,255,255,0.8)', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <Icon size={32} style={{ color: '#dc2626' }} />
                      </div>
                      <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 600 }}>{section.title}</h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal Overlay via React Portal prevents scrolling up issues */}
      {activeTab && createPortal(
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100000,
          background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn 0.3s ease forwards', padding: '24px'
        }}>
          <div style={{
            background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '24px', padding: isDesktop ? '40px' : '24px', maxWidth: '600px', width: '100%',
            maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)', position: 'relative',
            animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            <button 
              onClick={closeModal}
              style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', transition: 'background 0.2s', zIndex: 10 }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
            >
              <X size={24} style={{ color: '#64748b' }} />
            </button>
            
            {(() => {
              const sec = sections.find(s => s.id === activeTab);
              if (!sec) return null;
              const ModalIcon = sec.icon;
              return (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', paddingRight: '40px' }}>
                     <div style={{ padding: '14px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '14px', flexShrink: 0 }}>
                        <ModalIcon size={36} color="#dc2626" />
                     </div>
                     <h2 style={{ margin: 0, fontSize: isDesktop ? '1.8rem' : '1.5rem', color: '#0f172a', wordBreak: 'break-word' }}>{sec.title}</h2>
                  </div>
                  {sec.content}
                </div>
              );
            })()}
          </div>
        </div>,
        document.body
      )}
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
