import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>

        <div className="contact-grid">

          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--text-primary)' }}>Get in Touch</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <MapPin color="var(--accent-primary)" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Address</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Near and Mid-IR Photonics Laboratory (NMIRPL)<br />
                    Optics & Photonics Centre<br />
                    Indian Institute of Technology Delhi<br />
                    Hauz Khas, New Delhi - 110016, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Mail color="var(--accent-primary)" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                  <a 
                    href="mailto:gayathrib@iitd.ac.in" 
                    onClick={(e) => {
                      e.preventDefault();
                      const email = "gayathrib@iitd.ac.in";
                      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                      if (isMobile) {
                        window.location.href = `mailto:${email}`;
                      } else {
                        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    gayathrib@iitd.ac.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Phone color="var(--accent-primary)" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Phone</h4>
                  <a 
                    href="tel:011-265913583" 
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    011-265913583
                  </a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <a href="https://opc.iitd.ac.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0033cc', color: '#fff', padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', fontWeight: 600, boxShadow: '0 8px 16px rgba(0, 51, 204, 0.3)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                Optics & Photonics Centre <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="glass-panel map-container">
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
