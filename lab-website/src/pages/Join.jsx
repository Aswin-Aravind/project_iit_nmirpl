import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Join the Lab</h1>
        <p className="lead-text" style={{ marginBottom: '40px', maxWidth: '800px' }}>
          We are always looking for motivated and passionate researchers to join our team at IIT Delhi.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '32px' }}>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '16px' }}>PhD Openings</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              We have fully-funded PhD positions available for candidates with a strong background in Physics, Photonics, or Electrical Engineering. Candidates must clear the IIT Delhi PhD selection process.
            </p>
            <ul style={{ color: 'var(--text-secondary)', marginBottom: '24px', marginLeft: '20px', listStyleType: 'disc' }}>
              <li>Mid-IR Fiber Laser Development</li>
              <li>Optical Gas Sensors</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '16px' }}>Postdoc Opportunities</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Positions are open for National Postdoctoral Fellows (NPDF) and institute postdocs. Prior experience in experimental optics, fiber splicing, or laser physics is highly desirable.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '16px' }}>Internships</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Short-term (3-6 months) internships are available for highly motivated undergraduate and master's students. Limited funding is available depending on the project.
            </p>
          </div>

        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '24px' }}>
            Interested candidates should reach out with their CV and a brief cover letter.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Contact Us to Apply <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
