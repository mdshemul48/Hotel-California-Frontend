import React from 'react';
import { Button, Row, Col, Badge } from 'react-bootstrap';

const MyAddedRooms = ({ reservation, reservationRemoveHandler }) => {
  return (
    <div className='d-flex my-5'>
      <Row>
        <Col lg={3}>
          <div className='me-2'>
            <img
              src={reservation.room.image}
              alt='room 1'
              className='img-fluid rounded'
            />
          </div>
        </Col>
        <Col className={9}>
          <div>
            <h3>{reservation.room.name}</h3>
            {reservation.orderStatus === 'Approved' ? (
              <Badge bg='primary'>Approved</Badge>
            ) : (
              <Badge bg='warning'>Pending</Badge>
            )}
            <p className='w-75 mt-2'>{reservation.room.description}</p>
            <div className='d-flex align-items-center'>
              <span className='fs-5 fw-bold text-danger'>
                ${reservation.room.price} / night
              </span>
              <Button
                onClick={() => reservationRemoveHandler(reservation._id)}
                variant='danger'
                className='ms-2'
              >
                Remove
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyAddedRooms;
