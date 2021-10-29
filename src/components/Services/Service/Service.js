import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Service = () => {
  return (
    <Col lg={4}>
      <div className=''>
        <div>
          <img
            src='http://hotel.bold-themes.com/summer/wp-content/uploads/sites/2/2016/02/summer-room-1.jpg'
            alt='room 1'
            className='img-fluid rounded'
          />
        </div>
        <div>
          <h3>Double Room</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis viverra diam ac ornare. Donec rhoncus nisi in felis congue,
            at pulvinar nibh dapibus.
          </p>
          <div className='d-flex align-items-center'>
            <Button variant='danger'>Reserve</Button>
            <span className='ms-2 fs-5 fw-bold text-danger'>$59 / night</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Service;
