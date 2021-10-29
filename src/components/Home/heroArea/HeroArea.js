import React from 'react';

import './HeroArea.css';
const HeroArea = () => {
  return (
    <header
      className='main-hero-area py-5'
      style={{
        backgroundImage: `url(/img/summer-hero.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <div>
        <h1 className='main-title'>Unique location,</h1>
        <h1>service and stay</h1>
        <div />
        <p>
          At the heart of San Diego, on one of the most colorful beaches, right
          next to the Pacific ocean, lies the Hotel California, most famous for
          it’s easy going staff and vacation you’ll never forget…
        </p>
      </div>
    </header>
  );
};

export default HeroArea;
