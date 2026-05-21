import React from 'react';
import Carousel from '../components/Carousel';
import { Mail } from 'lucide-react';
import './About.css';

import gaayuPic from '../assets/Gaayu_Pic.jpg';
import archanaPic from '../assets/Archana.jpg';
import bhanuPic from '../assets/Bhanu IMG.jpeg';
import anjaliPic from '../assets/Anjali.jpg';

export default function About() {
    const teamMembers = [
        {
            name: "Prof. Gayathri Bharathan",
            title: "Principal Investigator",
            email: "gbharathan@iitd.ac.in",
            img: gaayuPic
        },
        {
            name: "Dr. Archana T C",
            title: "Principal Project Scientist",
            email: "ird601528@iitd.ac.in",
            img: archanaPic
        },
        {
            name: "Mr. Bhanu Yadav",
            title: "PhD Scholar",
            email: "opz248271@opc.iitd.ac.in",
            img: bhanuPic
        },
        {
            name: "Ms. Anjali Nehra",
            title: "PhD Scholar",
            email: "anjalinehra1999@gmail.com",
            img: anjaliPic
        }
    ];

    return (
        <div className="section animate-fade-in" style={{ paddingTop: '160px' }}>
            <div className="container">
                <h1 className="section-title" style={{ marginBottom: '40px' }}>About the Lab</h1>

                <div className="glass-panel" style={{ padding: '40px', marginBottom: '60px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                        The group led by Prof. Gayathri Bharathan focuses on the design and development of near- and mid-infrared fiber lasers, fiber amplifiers, and fiberized integrated components. The research emphasizes advancing high-power, wavelength-flexible fiber laser systems and addressing current limitations in mid-IR fiber laser development by creating mid-IR compatible integrated components such as waveguides, couplers, and WDMs, enabling fully fiberized laser cavities. The group also aims to develop novel broadband supercontinuum sources in the molecular fingerprint region (2-12 µm) using near- and mid-IR ultrafast fiber lasers, with applications in spectroscopy, sensing, and environmental and health monitoring.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '32px' }}>
                        <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '1.3rem' }}>Current Research Topics</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Design and fabrication of fiberized integrated components for all-fiber laser cavities. Development of all-fiber CW and pulsed laser sources in the near and mid-IR wavelengths.
                            </p>
                        </div>
                        <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '1.3rem' }}>Ongoing Work</h3>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '20px', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '12px' }}>Working on a DRDO funded project, aiming to develop source of 2 and 4 µm wavelength for counter-measure purposes.</li>
                                <li>Working on demonstrating and implementing a saturable absorber based on multimodal interference compatible for 2 µm wavelength mode locking.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <h2 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '40px', color: 'var(--text-primary)', textAlign: 'center' }}>The Team</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '32px', marginBottom: '80px' }}>
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s ease', height: '100%' }}>
                            <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', border: '4px solid #fff', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: '#0f172a', minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>{member.name}</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '24px', minHeight: '2.5rem' }}>{member.title}</p>
                            
                            {(() => {
                                const isPI = member.title === "Principal Investigator";
                                const defaultBg = isPI ? '#033500' : 'var(--bg-secondary)';
                                const defaultColor = isPI ? '#ffffff' : 'var(--text-secondary)';
                                const hoverBg = isPI ? '#022400' : '#e2e8f0';
                                const hoverColor = isPI ? '#ffffff' : 'var(--accent-hover)';

                                return (
                                    <a 
                                        href={`mailto:${member.email}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                                            if (isMobile) {
                                                window.location.href = `mailto:${member.email}`;
                                            } else {
                                                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}`, '_blank', 'noopener,noreferrer');
                                            }
                                        }}
                                        target="_blank" 
                                        rel="noreferrer" 
                                        style={{ 
                                            marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', 
                                            fontSize: '0.9rem', color: defaultColor, textDecoration: 'none', 
                                            background: defaultBg, padding: '10px 20px', borderRadius: '24px', 
                                            transition: 'all 0.2s', fontWeight: 500, border: isPI ? 'none' : '1px solid rgba(0,0,0,0.05)' 
                                        }} 
                                        onMouseEnter={(e) => { 
                                            e.currentTarget.style.background = hoverBg; 
                                            e.currentTarget.style.color = hoverColor; 
                                        }} 
                                        onMouseLeave={(e) => { 
                                            e.currentTarget.style.background = defaultBg; 
                                            e.currentTarget.style.color = defaultColor; 
                                        }}
                                    >
                                        <Mail size={16} /> Contact
                                    </a>
                                );
                            })()}
                        </div>
                    ))}
                </div>

                {/* Carousel */}
                <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)', textAlign: 'center' }}>Lab Gallery</h2>
                <Carousel />

            </div>
        </div>
    );
}
