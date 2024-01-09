import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/navbar.css"

const Header = () => {
  return (
    <Navbar expand="lg" className="container-fluid">
    <Container >
      <Navbar.Brand href="#home" className='link text-light'>Cyndi...</Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-light">
          <Nav.Link href="#home" className='text-light '>Home</Nav.Link>
          <Nav.Link href="#link" className='text-light '>About Me</Nav.Link>
          <Nav.Link href="#link" className='text-light '>Skills</Nav.Link>
          <Nav.Link href="#link" className='text-light '>Project</Nav.Link>
          <Nav.Link href="#link" className='text-light '>Contact</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
