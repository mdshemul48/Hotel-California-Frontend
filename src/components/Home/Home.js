import React from 'react';
import HeroArea from './heroArea/HeroArea';
import Services from './Service/Services';
import InfoArea from './InfoArea/InfoArea';
const Home = () => {
  return (
    <main>
      <HeroArea />
      <Services />
      <InfoArea />
    </main>
  );
};

export default Home;
