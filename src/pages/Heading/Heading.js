import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';


const Heading = () => {
    const {user,logOut} = useAuth()
    return (
     
            <>
       <Navbar bg="dark" variant="dark" sticky="fixed" collapseOnSelect expand="md">
        <Container sticky="top">
        <Navbar.Brand href="">HealthCare</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">products</Nav.Link>
            <Nav.Link as={Link} to="/datalist">datalist</Nav.Link>
             {/* <Nav.Link as={Link} className="text-white" to="/login">login</Nav.Link> */}
             {
                    user.email?<span className="text-white">{user.displayName}</span> : <span></span>
                }
             {
                 user.email? <button onClick={logOut}> logOut</button> :    <NavLink to="/login">login</NavLink>
             }
            
          
             
        </Navbar.Collapse>
        </Container>
        </Navbar>

  
</>
      
    );
};

export default Heading;