import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';

import useAuth from '../../hooks/useAuth';
import Logo from '../../assets/summer-logo.png';

const Auth = () => {
  // this will be used to redirect the user to the page they were on before logging in
  const history = useHistory();
  const location = useLocation();
  const { user, signInWithGoogle } = useAuth();

  // this will log the user in with google account
  const googleAuthHandler = () => {
    signInWithGoogle();
  };

  // if user is logged in, redirect to the home page or the page they were on before logging in.
  useEffect(() => {
    if (user.displayName) {
      const redirectPath = location?.state?.from?.pathname || '/';
      history.push(redirectPath);
    }
  }, [user, history, location]);

  return (
    <Container className='my-5'>
      {/* signup and login area */}
      <Row className='align-items-center justify-content-center'>
        <Col lg={6} className='shadow rounded'>
          <div className='text-center my-3'>
            <img src={Logo} alt='website logo' />
          </div>

          <h3 className='text-center mt-5'>Login With</h3>

          <Row className='my-3 mx-1 text-center my-5 px-3'>
            <Button
              variant='outline-dark'
              className='py-3 fw-bold'
              onClick={googleAuthHandler}
            >
              <FcGoogle className='me-2' />
              Login with Google
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
