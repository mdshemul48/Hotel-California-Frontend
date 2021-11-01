import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import Service from './Service';

import './Services.css';
const Services = () => {
  const [services, setServices] = React.useState([]);
  console.log(services);
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_LINK}/api/rooms`
        );
        console.log(result);
        setServices(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return (
    <Container className='my-5'>
      <h1 className='services-area-title mb-3'>Rooms & Suites</h1>
      <Row className='g-4'>
        {services.map((service) => {
          console.log(service);
          return <Service key={service._id} room={service} />;
        })}
      </Row>
    </Container>
  );
};

export default Services;
