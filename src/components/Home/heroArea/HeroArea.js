import React from 'react';
import { Container } from 'react-bootstrap';

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
      <Container className='header-text-area my-5'>
        <h1>The art of meeting your</h1>
        <h1>
          highest <span >expectations</span>{' '}
        </h1>
        <div />
        <p>
          Enjoying the sun and sea has never been so easy. At the beach of hotel{' '}
          California, <br />
          you’ll find our most complete service, great seaside and easy going
          staff.
          <br />
          Hotel California. Everything. Right where you need it.
        </p>
      </Container>
    </header>
  );
};

export default HeroArea;
