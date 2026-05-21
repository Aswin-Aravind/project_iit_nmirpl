import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Bookmark, Grid, List, ExternalLink } from 'lucide-react';
import './Publications.css';

export default function Publications() {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState(window.innerWidth <= 768 ? 'grid' : 'list');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewMode('grid');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const journals = [
    { title: "Chalcogenide-Glass Waveguide Arrays for Mid-Infrared Mode-Locked Fiber Lasers", year: "2025" },
    { title: "Physical mechanisms of femtosecond laser induced refractive index change in direct-written mid-infrared fiber Bragg gratings", year: "2024" },
    { title: "Linear and nonlinear optical properties of femtosecond laser inscribed waveguides into GLS glass", year: "2024" },
    { title: "Wavelength-stabilized figure-of-9 thulium-doped all-fiber laser emitting 560 fs pulses", year: "2024" },
    { title: "Wavelength-stabilized tunable mode-locked thulium-doped fiber laser beyond 2 µm", year: "2022" },
    { title: "Long wavelength operation of a dysprosium fiber laser for polymer processing", year: "2021" },
    { title: "MXene and PtSe2 saturable absorbers for all-fibre ultrafast mid-infrared lasers", year: "2021" },
    { title: "Femtosecond laser direct-written fiber Bragg gratings with high reflectivity and low loss at wavelengths beyond 4 µm", year: "2020" },
    { title: "Optimized laser-written ZBLAN fiber Bragg gratings with high reflectivity and low loss", year: "2019" },
    { title: "Grating inscription into fluoride fibers: A review", year: "2019" },
    { title: "Watt-level dysprosium fiber laser at 3.15 μm with 73% slope efficiency", year: "2018" },
    { title: "In-fiber polarizer based on a 45-degree tilted fluoride fiber Bragg grating for mid-infrared fiber laser technology", year: "2018" },
    { title: "Realization of aperiodic fiber Bragg gratings with ultrashort laser pulses and the line-by-line technique", year: "2018" },
    { title: "Direct inscription of Bragg gratings into coated fluoride fibers for widely tunable and robust mid-infrared lasers", year: "2017" }
  ];

  const conferences = [
    { title: "Femtosecond laser written high-index mid-infrared waveguides in chalcogenide glass", year: "2025" },
    { title: "Polarization-multiplexed mid-infrared fiber laser for dual-comb generation", year: "2023" },
    { title: "Tunable wavelength-stabilized thulium-doped fiber laser beyond 2000 nm", year: "2022" },
    { title: "All-fibre Ultrafast Mid-infrared Laser Based on MXene", year: "2021" },
    { title: "Femtosecond laser-written fiber Bragg gratings for high-power applications", year: "2020" },
    { title: "Mode-locked mid-IR fibre laser based on 2D nanomaterials", year: "2019" },
    { title: "Mid-infrared fiber sources for real-time biomedical sensing", year: "2019" },
    { title: "Novel mid-infrared fiber laser source for wavefront correction in astronomical detectors", year: "2019" },
    { title: "Single-pass and double-pass FBG fabrication methods for high power fiber lasers", year: "2019" },
    { title: "Numerical and experimental study of a mid-infrared thulium-doped fiber laser", year: "2019" },
    { title: "High-efficiency watt-level mid-infrared fiber lasers beyond 3 µm using Dy: ZBLAN", year: "2018" },
    { title: "Line-by-line femtosecond FBG inscription for innovative fiber lasers", year: "2018" },
    { title: "Ultrashort pulse point-by-point written aperiodic fiber Bragg gratings for suppression of OH-emission lines", year: "2018" },
    { title: "Optimized high reflectivity (99.98%) fiber Bragg gratings for the mid-infrared", year: "2018" },
    { title: "Fabrication of Gratings in Mid-IR Compatible Fibres", year: "2017" }
  ];

  const others = [
    { title: "Fiber Bragg gratings in soft glass fibers (Book Chapter in Mid-infrared fiber photonics)", year: "2019" }
  ];

  const renderCard = (pub, idx) => {
    if (viewMode === 'list') {
      return (
        <div key={idx} className="pub-card-list glass-panel" style={{ padding: '24px', transition: 'all 0.3s ease', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderLeft: '4px solid transparent' }} onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', lineHeight: '1.4', color: '#0f172a' }}>{pub.title}</h3>
          </div>
          <div style={{ width: '120px', textAlign: 'right', flexShrink: 0 }}>
            <span style={{ fontWeight: '700', color: 'var(--accent-primary)', fontSize: '1.1rem', background: 'rgba(37, 99, 235, 0.1)', padding: '6px 16px', borderRadius: '16px' }}>{pub.year}</span>
          </div>
        </div>
      );
    }
    return (
      <div key={idx} className="pub-card glass-panel" style={{ padding: '24px', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', lineHeight: '1.5', color: '#0f172a' }}>{pub.title}</h3>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '600', color: 'var(--accent-primary)', fontSize: '0.95rem' }}>{pub.year}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '160px' }}>
      <div className="container">
        
        {/* Header Section with Google Scholar Button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <h1 className="section-title" style={{ margin: 0 }}>Publications</h1>
            <a 
              href="https://scholar.google.com/citations?user=C70z8i0AAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: '#ffffff', 
                color: '#1e3a8a', 
                padding: '12px 24px', 
                borderRadius: '30px', 
                fontWeight: '700', 
                fontSize: '1.05rem', 
                textDecoration: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <ExternalLink size={20} />
              View on Google Scholar
            </a>
          </div>
        </div>
        
        {/* Unified Top Controls: Filter + View Switcher */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', gap: '20px' }}>
          {/* Main Filter Array */}
          <div style={{ display: 'flex', gap: '8px', background: 'rgb(255 255 255 / 40%)', backdropFilter: 'blur(10px)', padding: '6px', borderRadius: '40px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', overflowX: 'auto' }}>
            {['All', 'Journals', 'Conferences'].map(f => (
               <button 
                key={f} 
                onClick={() => setFilter(f)} 
                className="pub-filter-btn"
                style={{ padding: '8px 16px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: filter === f ? 'var(--accent-primary)' : 'transparent', color: filter === f ? '#fff' : 'var(--text-secondary)', fontWeight: 600, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              >
                {f}
               </button>
            ))}
          </div>

          {/* Grid vs List View Toggles - Hidden on Mobile via CSS */}
          <div className="view-toggle-container" style={{ display: 'flex', gap: '8px', background: 'rgb(255 255 255 / 40%)', backdropFilter: 'blur(10px)', padding: '6px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <button onClick={() => setViewMode('grid')} style={{ padding: '8px', border: 'none', borderRadius: '12px', background: viewMode === 'grid' ? 'var(--accent-primary)' : 'transparent', color: viewMode === 'grid' ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Grid size={20} />
            </button>
            <button onClick={() => setViewMode('list')} style={{ padding: '8px', border: 'none', borderRadius: '12px', background: viewMode === 'list' ? 'var(--accent-primary)' : 'transparent', color: viewMode === 'list' ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <List size={20} />
            </button>
          </div>
        </div>

        {/* View Layout Container Engine */}
        <div style={{ paddingBottom: '80px' }}>
          {(filter === 'All' || filter === 'Journals') && (
            <div style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}><BookOpen size={24} style={{ color: 'var(--accent-primary)' }} /></div>
                <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>Journals</h2>
              </div>
              <div style={viewMode === 'grid' ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '24px' } : { display: 'flex', flexDirection: 'column' }}>
                {journals.map((pub, idx) => renderCard(pub, idx))}
              </div>
            </div>
          )}

          {(filter === 'All' || filter === 'Conferences') && (
            <div style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}><FileText size={24} style={{ color: 'var(--accent-primary)' }} /></div>
                <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>Conferences</h2>
              </div>
              <div style={viewMode === 'grid' ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '24px' } : { display: 'flex', flexDirection: 'column' }}>
                {conferences.map((pub, idx) => renderCard(pub, idx))}
              </div>
            </div>
          )}

          {filter === 'All' && (
            <div style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}><Bookmark size={24} style={{ color: 'var(--accent-primary)' }} /></div>
                <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>Other (Book Chapters)</h2>
              </div>
              <div style={viewMode === 'grid' ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '24px' } : { display: 'flex', flexDirection: 'column' }}>
                {others.map((pub, idx) => renderCard(pub, idx))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
