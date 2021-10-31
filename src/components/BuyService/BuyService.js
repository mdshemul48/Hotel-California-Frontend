import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const BuyService = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Address</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Button variant='danger' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <div className='d-flex my-5'>
            <div className='me-2'>
              <img
                src='http://hotel.bold-themes.com/summer/wp-content/uploads/sites/2/2016/02/summer-room-1.jpg'
                alt='room 1'
                width={'250px'}
                className='img-fluid rounded'
              />
            </div>
            <div>
              <h3>Double Room</h3>
              <p className='w-75'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                mollis viverra diam ac ornare. Donec rhoncus nisi in felis
                congue, at pulvinar nibh dapibus.
              </p>
              <div className='d-flex align-items-center'>
                <span className='fs-5 fw-bold text-danger'>$59 / night</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyService;
