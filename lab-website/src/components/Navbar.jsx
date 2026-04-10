import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'PI', path: '/pi' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'News', path: '/news' },
    { name: 'Join Us', path: '/join' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    const isHidden = scrolled && location.pathname !== '/';

    return (
        <header className={`site-header ${isHidden ? 'hidden-nav' : ''}`}>
            {/* Top bar */}
            <div className="header-bar">
                <Link to="/" className="header-logo-link" onClick={closeMenu}>
                    <img src={logoImg} alt="NMIRPL Logo" className="header-logo" />
                </Link>

                {/* Desktop links */}
                <nav className="desktop-nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-primary contact-btn">Contact</Link>
                </nav>

                {/* Hamburger */}
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile overlay */}
            {menuOpen && (
                <div className="mobile-overlay">
                    <nav className="mobile-nav">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="mobile-nav-link"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-primary mobile-contact-btn" onClick={closeMenu}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
