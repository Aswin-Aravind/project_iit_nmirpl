import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--text-primary)' }}>Get in Touch</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <MapPin color="var(--accent-primary)" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Address</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Near and Mid-IR Photonics Laboratory (NMIRPL)<br />
                    Department of Physics<br />
                    Indian Institute of Technology Delhi<br />
                    Hauz Khas, New Delhi - 110016, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Mail color="var(--accent-primary)" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                  <a href="mailto:gbharathan@iitd.ac.in" style={{ color: 'var(--text-secondary)' }}>gbharathan@iitd.ac.in</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Phone color="var(--accent-primary)" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+91-11-2659-XXXX</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <a href="https://physics.iitd.ac.in/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Physics Department IITD <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* Embed Google Map placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.609403816694!2d77.19043991508215!3d28.54480038245233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b841e05b%3A0x67eeaa45a8df24b1!2sIIT%20Delhi!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIT Delhi Google Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
