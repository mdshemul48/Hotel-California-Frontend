import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Service from '../../Services/Service/Service';

import './Services.css';
const Services = () => {
  return (
    <Container className='my-5'>
      <h1 className='services-area-title mb-3'>Rooms & Suites</h1>
      <Row className='g-4'>
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </Row>
    </Container>
  );
};

export default Services;
