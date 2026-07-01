import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BonsaiNavbar from './components/BonsaiNavbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import BonsaiGuide from './pages/BonsaiGuide';
import CareCalendar from './pages/CareCalendar';
import Workshop from './pages/Workshop';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <BonsaiNavbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<BonsaiGuide />} />
            <Route path="/calendar" element={<CareCalendar />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
