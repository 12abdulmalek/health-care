import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import pic from '../../images/healthCare4.jpg'
import './Heading.css'
const Heading = () => {
    const {user,logOut} = useAuth()
    console.log(user.photoURL);
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
             {
                    user.email?<div  className='profile-imgs' >
                        <button ><img className='profile-img' src={user.photoURL}/></button>
                        <div className="text-white displayName">
                            <h4>{user.displayName}</h4> <button onClick={logOut}> logOut</button>  </div>
                        </div> : <Link to="/login">login</Link>
                }             
        </Navbar.Collapse>
        </Container>
        </Navbar> 
</>
      
    );
};

export default Heading;