import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import './ManageAllRooms.css';
import Service from './Service';
const ManageAllRooms = () => {
  const [allReservation, setAllReservation] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_LINK}/api/orders`
      );
      setAllReservation(result.data);
    };
    fetch();
  }, []);

  const reservationRemoveHandler = async (id) => {
    const confirm = window.confirm(
      'Are you sure you want to remove this reservation?'
    );

    if (confirm) {
      const newReservation = allReservation.filter(
        (reservation) => reservation._id !== id
      );
      setAllReservation(newReservation);
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_LINK}/api/orders/${id}`
        );

        alert('Reservation deleted successful');
      } catch (err) {
        alert('Reservation deleted failed');
      }
    }
  };

  const reservationApproveHandler = async (id) => {
    const confirm = window.confirm(
      'Are you sure you want to approve this reservation?'
    );
    if (confirm) {
      try {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_LINK}/api/orders/${id}`
        );
        const itemIndex = allReservation.findIndex((item) => item._id === id);
        allReservation[itemIndex].orderStatus = 'Approved';
        setAllReservation([...allReservation]);
      } catch (err) {
        alert('Reservation approved failed');
      }
    }
  };

  return (
    <Container>
      {allReservation.length ? (
        allReservation.map((reservation) => {
          return (
            <Service
              key={reservation._id}
              reservation={reservation}
              reservationRemoveHandler={reservationRemoveHandler}
              reservationApproveHandler={reservationApproveHandler}
            />
          );
        })
      ) : (
        <h1 className='my-5 text-center'>You have no reservation</h1>
      )}
    </Container>
  );
};

export default ManageAllRooms;
