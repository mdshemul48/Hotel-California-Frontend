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

  const reservationRemoveHandler = async (id) => {
    const confirm = window.confirm(
      'Are you sure you want to remove this reservation?'
    );
    if (confirm) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_LINK}/api/orders/${id}`
        );
        const newReservation = allReservation.filter(
          (reservation) => reservation._id !== id
        );
        setAllReservation(newReservation);
        alert('Reservation deleted successful');
      } catch (err) {
        alert('Reservation deleted failed');
      }
    }
  };

  return (
    <main>
      <Container>
        {allReservation.map((reservation) => (
          <MyAddedRooms
            key={reservation._id}
            reservation={reservation}
            reservationRemoveHandler={reservationRemoveHandler}
          />
        ))}
      </Container>
    </main>
  );
};

export default MyReservation;
