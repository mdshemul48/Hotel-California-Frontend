import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import MyAddedRooms from './MyAddedRooms';

const MyReservation = () => {
  const { user } = useAuth();
  const [allReservation, setAllReservation] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_LINK}/api/orders/${user.email}`
        );
        setAllReservation(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [user.email]);

  console.log(allReservation);
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
