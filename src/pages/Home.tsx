import React, { Suspense, lazy } from 'react';
import BonsaiDisplayHero from '../components/BonsaiDisplayHero';

const HomeSections = lazy(() => import('./HomeSections'));

const Home: React.FC = () => {
  return (
    <main>
      <BonsaiDisplayHero />
      <Suspense fallback={null}>
        <HomeSections />
      </Suspense>
    </main>
  );
};

export default Home;
