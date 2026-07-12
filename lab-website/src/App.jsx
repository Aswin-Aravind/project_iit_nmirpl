import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PremiumWhiteCanvas from './components/PremiumWhiteCanvas';
import ScrollToTop from './components/ScrollToTop';
import FixedHomeButton from './components/FixedHomeButton';
import IntroSplash from './components/IntroSplash';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Grants from './pages/Grants';
import Join from './pages/Join';
import News from './pages/News';
import PI from './pages/PI';
import People from './pages/People';
import Publications from './pages/Publications';
import Research from './pages/Research';
import Teaching from './pages/Teaching';

function App() {
    // Show intro only on initial load of the homepage
    const [showIntro, setShowIntro] = useState(window.location.pathname === '/');

    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                {showIntro && <IntroSplash onComplete={() => setShowIntro(false)} />}
                <PremiumWhiteCanvas />
                <div className="app-global-bg"></div>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/grants" element={<Grants />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/pi" element={<PI />} />
                        <Route path="/people" element={<People />} />
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/teaching" element={<Teaching />} />
                    </Routes>
                </div>
                <Footer />
                <FixedHomeButton />
            </div>
        </Router>
    );
}

export default App;
