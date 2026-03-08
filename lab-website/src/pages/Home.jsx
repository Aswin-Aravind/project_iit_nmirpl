import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, Activity } from 'lucide-react';
import { publications } from '../data/publications';
import { projects } from '../data/projects';
import { news } from '../data/news';
import LaserTitle from '../components/LaserTitle';
import './Home.css';

export default function Home() {
    const recentPubs = publications.slice(0, 3);
    const activeProjects = projects.filter(p => p.status === 'ongoing').slice(0, 3);
    const latestNews = news.slice(0, 3);

    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
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

            {/* Highlights Grid */}
            <section className="section highlights-section">
                <div className="container">
                    <div className="highlights-grid">

                        {/* Latest Publications */}
                        <div className="highlight-card glass-panel">
                            <div className="card-header">
                                <BookOpen className="card-icon" />
                                <h3>Latest Publications</h3>
                            </div>
                            <ul className="highlight-list">
                                {recentPubs.map(pub => (
                                    <li key={pub.id}>
                                        <span className="pub-title">{pub.title}</span>
                                        <span className="pub-meta">{pub.journal} ({pub.year})</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/publications" className="card-link">View all publications &rarr;</Link>
                        </div>

                        {/* Major Projects */}
                        <div className="highlight-card glass-panel">
                            <div className="card-header">
                                <Activity className="card-icon" />
                                <h3>Major Projects</h3>
                            </div>
                            <ul className="highlight-list">
                                {activeProjects.map(proj => (
                                    <li key={proj.id}>
                                        <span className="proj-title">{proj.title}</span>
                                        <span className="proj-meta">{proj.agency}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/research" className="card-link">View all projects &rarr;</Link>
                        </div>

                        {/* Recent News */}
                        <div className="highlight-card glass-panel">
                            <div className="card-header">
                                <Award className="card-icon" />
                                <h3>News & Updates</h3>
                            </div>
                            <ul className="highlight-list">
                                {latestNews.map(item => (
                                    <li key={item.id}>
                                        <span className="news-date">{item.date}</span>
                                        <span className="news-title">{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/news" className="card-link">More news &rarr;</Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
