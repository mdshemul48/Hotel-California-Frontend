import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import AboutImg from '../../../assets/summer-about.jpg';

import './InfoArea.css';
const InfoArea = () => {
  return (
    <section className='my-5'>
      <Container>
        <Row className='g-2'>
          <Col lg={4} className='d-flex align-items-stretch'>
            <div className='px-3 py-4  info-text-area rounded'>
              <h6 className='mt-3'>IN A NUTSHELL</h6>
              <h1 className='fw-bolder'>Hotel California</h1>
              <p className='my-3'>
                At the heart of San Diego, on one of the most colorful beaches,
                right next to the Pacific ocean, lies the Hotel California, most
                famous for it’s easy going staff and vacation you’ll never
                forget…
                <br />
                If you chose to stay with us you will enjoy modern home comforts
                in a traditional setting.
              </p>
              <Button variant='danger'>READ MORE</Button>
            </div>
          </Col>
          <Col lg={8}>
            <img src={AboutImg} className='w-100 rounded' alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoArea;
