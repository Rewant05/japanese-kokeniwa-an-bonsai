import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BonsaiNavbar from './components/BonsaiNavbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const BonsaiGuide = lazy(() => import('./pages/BonsaiGuide'));
const CareCalendar = lazy(() => import('./pages/CareCalendar'));
const Workshop = lazy(() => import('./pages/Workshop'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <BonsaiNavbar />
        <div style={{ flex: 1 }}>
          <Suspense fallback={null}>
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
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
