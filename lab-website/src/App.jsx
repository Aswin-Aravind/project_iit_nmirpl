import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmosCanvas from './components/CosmosCanvas';

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
    return (
        <Router>
            <div className="app">
                <CosmosCanvas />
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
            </div>
        </Router>
    );
}

export default App;
