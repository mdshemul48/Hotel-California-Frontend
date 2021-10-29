import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './HeroArea.css';
const HeroArea = () => {
  return (
    <header
      className='main-hero-area'
      style={{
        backgroundImage: `url(/img/summer-hero.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <Container className='header-text-area my-5'>
        <h1>The art of meeting your</h1>
        <h1>
          highest <span>expectations</span>{' '}
        </h1>
        <div />
        <p className='mt-4'>
          Enjoying the sun and sea has never been so easy. At the beach of hotel{' '}
          California, <br />
          you’ll find our most complete service, great seaside and easy going
          staff.
          <br />
          Hotel California. Everything. Right where you need it.
        </p>
        <div className='mt-4'>
          <Button variant='outline-danger' className='py-2'>
            <AiOutlineArrowRight className='me-1' />
            Check our OFFERS & DEALS
          </Button>{' '}
          <Button variant='danger' className='py-2'>
            BOOK NOW
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default HeroArea;
