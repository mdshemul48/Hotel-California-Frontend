import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddRoom = () => {
  return (
    <main className='my-5'>
      <Container>
        <h2>Add New Room</h2>
        <hr />
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Room Name: </Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Price</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Image Link </Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Button variant='danger' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default AddRoom;
