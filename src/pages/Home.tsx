import React, { Suspense, lazy, useEffect, useState } from 'react';
import BonsaiDisplayHero from '../components/BonsaiDisplayHero';

const HomeSections = lazy(() => import('./HomeSections'));

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

const Home: React.FC = () => {
  const [shouldLoadSections, setShouldLoadSections] = useState(false);

  useEffect(() => {
    const loadSections = () => setShouldLoadSections(true);
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback && idleWindow.cancelIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(loadSections, { timeout: 900 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timer = window.setTimeout(loadSections, 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main>
      <BonsaiDisplayHero />
      {shouldLoadSections && (
        <Suspense fallback={null}>
          <HomeSections />
        </Suspense>
      )}
    </main>
  );
};

export default Home;
