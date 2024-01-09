import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/navbar.css"

const Header = () => {
  return (
    <Navbar expand="lg" className="container-fluid navbar" fixed="top">
    <Container >
      <Navbar.Brand href="#home" className='link '>Cyndi...</Navbar.Brand>
      <Navbar.Toggle className="bg-warning" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-light">
          <Nav.Link href="#home" className=' auto'>Home</Nav.Link>
          <Nav.Link href="#about" className=' auto'>About Me</Nav.Link>
          <Nav.Link href="#skill" className=' auto'>Skills</Nav.Link>
          <Nav.Link href="#project" className=' auto'>Project</Nav.Link>
          <Nav.Link href="#contact" className=' auto'>Contact</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
