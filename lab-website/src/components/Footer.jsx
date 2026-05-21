import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer-grid glass-panel">
                    <div className="footer-col">
                        <h3 className="footer-title">NMIRPL</h3>
                        <p className="footer-desc">
                            Near and Mid-IR Photonics Laboratory, focused on advancing laser and sensor technologies for medical, defense, and environmental applications.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-subtitle">Contact</h4>
                        <ul className="footer-links">
                            <li><MapPin size={18} /> NMIRPL, Optics & Photonics Centre, IIT Delhi, Hauz Khas, New Delhi - 110016, India</li>
                            <li><Mail size={18} /> gayathrib@iitd.ac.in</li>
                            <li><Phone size={18} /> 011-265913583</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <div className="footer-quick-links">
                            <Link to="/about">About Us</Link>
                            <Link to="/publications">Publications</Link>
                            <Link to="/join">Join the Lab</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NMIRPL, IIT Delhi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
