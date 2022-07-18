import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import useAuth from '../../hook/useAuth';

import { useLocation, useHistory } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const { googleHandaler, gitHandaler, signInPersonalData } = useAuth();
  //  console.log(googleHandle)
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handlePassword = e => {
    setPass(e.target.value);
  }
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handleRegistration = e => {
    //    (email,pass);
    signInPersonalData(email, pass, location, history);
    e.preventDefault();
  }
  const googleHandleSignIn = () => {
    googleHandaler(location, history);
  }

  return (
    <div>
      <div className="mt-3 p-5 border w-75  mx-auto">
        <div className="d-flex justify-content-around">
          <h3 className="mx-5">Log in</h3>
          <p> need an acount?
            <Link to="/register">
              <button className="sign-btn">Sign Up</button>
            </Link>
          </p>
        </div>
        <Form onSubmit={handleRegistration} className="w-100 mt-2 mx-auto">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control onBlur={handleEmail} type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" className="btn log-in w-100 border" style={{ borderRadius: "33px" }}>Log in</Button>

            </Col>

            <div className="mx-5 d-flex justify-content-center">
              <div className='mx-5 w-50 d-flex justify-content-around sign-icon'>
                <Button onClick={googleHandleSignIn} > <i><AiFillGoogleCircle /></i></Button>
                <Button onClick={gitHandaler}>   <i> <AiFillGithub /></i></Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;