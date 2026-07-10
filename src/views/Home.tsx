import React from 'react';
import BonsaiDisplayHero from '../components/BonsaiDisplayHero';
import HomeSections from './HomeSections';

const Home: React.FC = () => {
  return (
    <main>
      <BonsaiDisplayHero />
      <HomeSections />
    </main>
  );
};

export default Home;
