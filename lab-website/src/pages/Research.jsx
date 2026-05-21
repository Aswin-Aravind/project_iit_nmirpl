import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Activity, Zap, Layers, Microscope } from 'lucide-react';
import './Research.css';

export default function Research() {
  const areas = [
    {
      title: "Near & Mid-Infrared Fiber Lasers",
      desc: "Developing high-power fiber laser sources operating in the 1-5 µm spectral region for defence, spectroscopy and medical applications.",
      icon: <Zap size={32} />
    },
    {
      title: "Photonic Sensors",
      desc: "Creating highly sensitive, fiber-based compact sensors for environmental monitoring and trace gas detection.",
      icon: <Target size={32} />
    },
    {
      title: "Fiber-based Biomedical Lasers",
      desc: "Designing specialized laser systems for non-invasive surgery and high-resolution optical coherence tomography.",
      icon: <Activity size={32} />
    },
    {
      title: "Nonlinear Fiber Optics",
      desc: "Investigating supercontinuum generation and other nonlinear effects in specialized microstructured optical fibers.",
      icon: <Layers size={32} />
    },
    {
      title: "Advanced Photonic Devices",
      desc: "Fabrication of novel fiber components, gratings, and couplers for next-generation optical systems.",
      icon: <Microscope size={32} />
    }
  ];

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">

        <div className="research-header">
          <h1 className="section-title">Research Areas</h1>
          <div className="research-links">
            <Link to="/grants" className="btn-secondary">View Projects & Grants</Link>
            <Link to="/facilities" className="btn-secondary">Explore Facilities</Link>
          </div>
        </div>

        <div className="research-grid mt-4">
          {areas.map((area, idx) => (
            <div key={idx} className="research-card glass-panel">
              <div className="research-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
