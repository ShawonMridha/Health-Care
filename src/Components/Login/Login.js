import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const {signInUsingGoogle, handleRegistration,handleEmailChange, handlePasswordChange, error, toggleLogin,isLogin, handleResetPassword} = useAuth();
    return (
        <div>



<Container>
         <Form onSubmit={handleRegistration}>
             <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
      </Form.Label>
     
    </Form.Group>
  </fieldset>
  
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check onChange={toggleLogin} label="Already Registered" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
     
    </Col>
  </Form.Group>
   <div className="row mb-3 text-danger">{error}</div>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className="primary" type="submit">{isLogin ? 'Login' : 'Register'}</Button>
    </Col>
    <button type="button" onClick={handleResetPassword} className="btn btn-primary btn-sm">Reset password</button>
  </Form.Group>
</Form>
  </Container>

            


            <div>---------------------------------------</div>
            <br /> <br /> <br />
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
           
        </div>
    );
};

export default Login;