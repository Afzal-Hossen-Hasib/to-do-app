import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/addtask">Add Task</Nav.Link>
      {
          user ?
           <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sing Out</button>
          :
          <Nav.Link as={Link} to="/login"> 
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        </div>
    );
};

export default Header;