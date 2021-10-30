import React from 'react';
import { Container } from 'react-bootstrap';

import MyAddedRooms from './MyAddedRooms';
const MyReservation = () => {
  return (
    <main>
      <Container>
        <MyAddedRooms />
        <MyAddedRooms />
        <MyAddedRooms />
        <MyAddedRooms />
        <MyAddedRooms />
      </Container>
    </main>
  );
};

export default MyReservation;
