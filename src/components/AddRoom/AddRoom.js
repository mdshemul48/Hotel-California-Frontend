import React from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const AddRoom = () => {
  const [room, setRoom] = React.useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const RoomStateChangeHandler = (event) => {
    setRoom({
      ...room,
      [event.target.name]: event.target.value,
    });
  };

  const RoomSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setRoom({
        name: '',
        description: '',
        price: '',
        image: '',
      });
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_LINK}/api/rooms`,
        room
      );
      alert(response.data.result);
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(room);
  return (
    <main className='my-5'>
      <Container>
        <h2>Add New Room</h2>
        <hr />
        <Form onSubmit={RoomSubmitHandler}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Room Name </Form.Label>
            <Form.Control
              name='name'
              onChange={RoomStateChangeHandler}
              value={room.name}
              type='text'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              name='price'
              onChange={RoomStateChangeHandler}
              type='text'
              value={room.price}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Image Link </Form.Label>
            <Form.Control
              name='image'
              onChange={RoomStateChangeHandler}
              type='text'
              value={room.image}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={RoomStateChangeHandler}
              name='description'
              as='textarea'
              rows={3}
              value={room.description}
            />
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
