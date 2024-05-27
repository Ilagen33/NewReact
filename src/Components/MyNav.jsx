import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav({ startSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      startSearch(searchTerm);
  };

  return (
    <Navbar expand="lg" className="bg-black text-white">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              alt="Logo-book"
              src="https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/clay/notebook-dynamic-clay.png"
              width="100"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">About</Nav.Link>
            <Nav.Link href="#" className="text-white">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Button variant="outline-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;