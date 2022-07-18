import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import useAuth from '../../hook/useAuth';
import pic from '../../images/login.svg'
import './register.css'
const Register = () => {
  const { googleHandleSignIn, gitHandaler, personalHandaler } = useAuth()
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();
  const handlePassword = e => {
    setPass(e.target.value);
  }
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handleRegistration = e => {
    personalHandaler(email, pass, history);
    e.preventDefault();
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-7 col-lg-8 mt-5'>
            <Form onSubmit={handleRegistration} className="w-75 mt-2">
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
                  <Button type="submit" className="register-btn form-control">SIGN UP</Button>
                  <div className='line-circle'></div>
                  <div className='mt-3 d-flex justify-content-center '>
                    <div className=' w-50 d-flex justify-content-around sign-icon'>
                      <Button onClick={googleHandleSignIn} > <i><AiFillGoogleCircle /></i></Button>
                      <Button onClick={gitHandaler}>   <i> <AiFillGithub /></i></Button>
                    </div>
                  </div>
                  <br />
                  <p className='sign-sec'>Already a user?  <Button as={Link} to="/login" type="submit" className="login-btn text-decoration-none w-5">LOGIN</Button></p>



                </Col>
              </Form.Group>
            </Form>
          </div>
          <div className='col-12 col-md-5 col-lg-4 login-img'>
            <img src={pic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;