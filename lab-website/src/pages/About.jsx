import React from 'react';
import { Target, Lightbulb, Shield, Activity } from 'lucide-react';
import './About.css';

export default function About() {
    const applications = [
        { title: "Medical Lasers", icon: <Activity size={32} /> },
        { title: "Environmental Sensing", icon: <Target size={32} /> },
        { title: "Defense & Security", icon: <Shield size={32} /> },
        { title: "Fiber Amplifiers", icon: <Lightbulb size={32} /> }
    ];

    return (
        <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
            <div className="container">
                <h1 className="section-title">About the Lab</h1>

                <div className="about-grid">
                    <div className="about-content glass-panel">
                        <h2>Vision & Mission</h2>
                        <p className="lead-text">
                            The Near and Mid-IR Photonics Laboratory (NMIRPL) at IIT Delhi focuses on pioneering research in fiber lasers and photonic devices.
                        </p>
                        <p>
                            Our mission is to bridge the gap between fundamental optical physics and real-world technological applications. By developing advanced mid-infrared components, we aim to deliver next-generation solutions for medical diagnostics, environmental monitoring, and national security.
                        </p>

                        <h2 className="mt-8">Why Near- and Mid-IR?</h2>
                        <p>
                            The mid-infrared spectral range (2-5 µm) contains the fundamental absorption bands of numerous important molecules. By designing precise, high-power fiber lasers that operate in these specific wavelengths, we unlock entirely new paradigms in spectroscopy, non-invasive surgery, and long-range remote sensing.
                        </p>
                    </div>

                    <div className="about-sidebar">
                        <h3 className="sidebar-title">Key Applications</h3>
                        <div className="applications-grid">
                            {applications.map((app, index) => (
                                <div key={index} className="app-card glass-panel">
                                    <div className="app-icon">{app.icon}</div>
                                    <h4>{app.title}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="glass-panel stats-panel mt-4">
                            <div className="stat">
                                <h3>15+</h3>
                                <p>Publications</p>
                            </div>
                            <div className="stat">
                                <h3>5</h3>
                                <p>Major Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
