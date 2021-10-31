import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const BuyService = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [roomInfo, setRoomInfo] = React.useState({});
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setFormData({
      ...formData,
      name: user.displayName,
      email: user.email,
    });
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const url = `${process.env.REACT_APP_BACKEND_LINK}/api/rooms/${id}`;
      try {
        const response = await axios.get(url);
        setRoomInfo(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_LINK}/api/orders`;

    formData.room = roomInfo;
    axios
      .post(url, formData)
      .then(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
        });
        alert('Order placed successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.name}
                name='name'
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.email}
                name='email'
                type='email'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.phone}
                name='phone'
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.address}
                name='address'
                type='text'
              />
            </Form.Group>
            <Button variant='danger' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <div className=''>
            <div className='me-2'>
              <img
                src={roomInfo.image}
                alt={roomInfo.name}
                className='img-fluid rounded'
              />
            </div>
            <div>
              <h3>{roomInfo.name}</h3>
              <p className='w-75'>{roomInfo.description}</p>
              <div className='d-flex align-items-center'>
                <span className='fs-5 fw-bold text-danger'>
                  ${roomInfo.price} / night
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyService;
