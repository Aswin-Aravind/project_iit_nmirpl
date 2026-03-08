import React from 'react';

export default function Teaching() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Teaching & Courses</h1>
        <p className="lead-text" style={{ marginBottom: '40px' }}>Courses taught at Indian Institute of Technology Delhi.</p>

        <div className="glass-panel" style={{ padding: '40px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>Current Courses</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }}>PYL100: Electromagnetic Waves and Quantum Mechanics</strong>
              <span style={{ color: 'var(--text-secondary)' }}>Undergraduate core course covering the fundamentals of electromagnetism and quantum physics.</span>
            </li>
            <li style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }}>PYL200: Fiber Optics and Applications</strong>
              <span style={{ color: 'var(--text-secondary)' }}>Advanced elective detailing light propagation in waveguides, dispersion, and nonlinear effects.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>Student Projects</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We actively mentor B.Tech, M.Tech, and MSc students for their major projects. If you are an IIT Delhi student interested in hands-on experience with high-power lasers and optical sensing, please reach out via the Contact page with your CV and a brief statement of interest.
          </p>
        </div>
      </div>
    </div>
  );
}
