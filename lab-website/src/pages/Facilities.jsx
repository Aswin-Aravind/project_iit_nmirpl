import React from 'react';

export default function Facilities() {
  const facilities = [
    { title: "Fiber Laser Development Setups", desc: "State-of-the-art optical tables equipped with high-power pump diodes and specialized fibers." },
    { title: "Mid-IR Optical Characterization", desc: "Advanced monochromators and mid-IR detectors for precise spectral analysis." },
    { title: "Optical Spectrum Analyzers", desc: "High-resolution OSAs covering visible to mid-IR wavelength ranges." },
    { title: "Fiber Splicing and Fabrication", desc: "Specialty fiber splicers and cleavers for processing soft-glass and silica fibers." },
    { title: "Nonlinear Optics Setups", desc: "Femtosecond laser systems for supercontinuum generation and nonlinear characterization." }
  ];

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Laboratory Facilities</h1>
        <p className="lead-text" style={{ marginBottom: '40px' }}>
          NMIRPL is equipped with world-class infrastructure to support cutting-edge photonics research.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {facilities.map((fac, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '32px', borderTop: '4px solid var(--accent-primary)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)' }}>{fac.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
