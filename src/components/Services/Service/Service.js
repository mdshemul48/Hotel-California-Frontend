import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';

const Service = (props) => {
  const { room } = props;
  console.log(room);
  const { name, description, price, _id, image } = room;
  return (
    <Col lg={4}>
      <div>
        <div>
          <img src={image} alt='room 1' className='img-fluid rounded' />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className='d-flex align-items-center'>
            <Button as={Link} to={`/buy-service/${_id}`} variant='danger'>
              Reserve
            </Button>
            <span className='ms-2 fs-5 fw-bold text-danger'>
              ${price} / night
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Service;
