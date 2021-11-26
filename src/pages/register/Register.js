import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Register = () => {
    const { personalHandaler }=useAuth()
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const handlePassword = e =>{
        setPass(e.target.value);
    }
    const handleEmail = e => {
       setEmail(e.target.value);
    }
       const handleRegistration = e => {
        //    (email,pass);
          personalHandaler(email,pass);
           e.preventDefault();
       }
       
    return (
             <div>
                 <Form onSubmit={handleRegistration} className="w-75 mt-2">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control onBlur={handleEmail} type="email"   placeholder="Email" />
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
      <Button  type="submit" className="btn btn-primary mx-3">register</Button> <br />
        <p>hava a already account please login</p>
        <Button as={Link} to="/login" type="submit" className="btn btn-primary">log in</Button>
  
       </Col>
  </Form.Group>
</Form>
        </div>
    );
};

export default Register;