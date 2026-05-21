import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LaserTitle from '../components/LaserTitle';
import iitdLogo from '../assets/IIT LOGO.png';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page animate-fade-in">
            <div className="home-bg-logo-container">
                <img src={iitdLogo} alt="IIT Delhi Background Outer" className="home-bg-logo-outer" />
                <img src={iitdLogo} alt="IIT Delhi Background Inner" className="home-bg-logo-inner" />
            </div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title">
                        <LaserTitle text="Near and Mid-IR Photonics&#10;Laboratory" />
                    </h1>
                    <p className="hero-tagline">Advancing the frontiers of fiber lasers, mid-IR optics, and photonic sensors at IIT Delhi.</p>
                    <div className="hero-actions">
                        <Link to="/research" className="btn-primary">Explore Our Research <ArrowRight size={18} /></Link>
                        <Link to="/about" className="btn-secondary">About The Lab</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
