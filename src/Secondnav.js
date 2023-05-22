import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Secondnav() {
  return (
    <div>
       <Navbar bg="warning" variant="warning">
        <Container>
          <Navbar.Brand href="#home"><NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Toys & Games
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stationary</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
               Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
               Magazines
              </NavDropdown.Item>
            </NavDropdown></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Books |</Nav.Link>
            <Nav.Link href="#features">Toys |</Nav.Link>
            <Nav.Link href="#pricing">Stationary |</Nav.Link>
            <Nav.Link href="#home">Gifts & Accessories |</Nav.Link>
            <Nav.Link href="#features">Magazines |</Nav.Link>
            <Nav.Link href="#pricing">The Write Place</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Secondnav
