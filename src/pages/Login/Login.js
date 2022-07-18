import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

import { useLocation , useHistory } from 'react-router-dom';

const Login = () => {
    const  {googleHandaler,gitHandaler,signInPersonalData} = useAuth();
  //  console.log(googleHandle)
       const location = useLocation();
       const history = useHistory();
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
        signInPersonalData(email,pass,location,history);
         e.preventDefault();
     }
     const googleHandleSignIn = () => {
       googleHandaler(location,history);
     }
   
    return (
        <div>
          <div className="mt-3 p-5 border w-75  mx-auto">
         <div className="d-flex justify-content-around">
           <h3 className="mx-5">Log in</h3>
          <p> need an acount? 

             <Link to="/register"> 
        <button className="btn btn-primary mx-2"> Sign Up</button>
      </Link>
      </p>
         </div>
             <Form onSubmit={handleRegistration} className="w-100 mt-2 mx-auto">
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
      <Button type="submit" className="btn btn-primary w-100 border" style={{borderRadius:"33px"}}>Log in</Button>

         </Col>
  </Form.Group>
</Form>

   <div className="w-75 mx-auto d-flex justify-content-center">
   <Button onClick={ googleHandleSignIn } className="btn btn-primary mx-5  W-50">Continue with Google</Button>
     <Button onClick={ gitHandaler } className="btn btn-primary mr-1  W-50">Continue with Github</Button> 
   
   </div>
        </div>
        </div>
    );
};

export default Login;