import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import BonsaiNavbar from './components/BonsaiNavbar';

import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const BonsaiGuide = lazy(() => import('./pages/BonsaiGuide'));
const CareCalendar = lazy(() => import('./pages/CareCalendar'));
const Workshop = lazy(() => import('./pages/Workshop'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Footer = lazy(() => import('./components/Footer'));

const getPathname = () => window.location.pathname || '/';

const App: React.FC = () => {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleNavigation = () => setPathname(getPathname());

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const page = useMemo(() => {
    switch (pathname) {
      case '/about':
        return <About />;
      case '/guide':
        return <BonsaiGuide />;
      case '/calendar':
        return <CareCalendar />;
      case '/workshop':
        return <Workshop />;
      case '/contact':
        return <Contact />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <Terms />;
      case '/':
      default:
        return <Home />;
    }
  }, [pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BonsaiNavbar />
      <div style={{ flex: 1 }}>
        <Suspense fallback={null}>{page}</Suspense>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
