//IMPORT REACT E USESTATE
import React, { useState } from "react";

//IMPORT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Funzione principale
function MyNav({ setSearch, setNumToShow }) {

  {/*Creo uno stato per tener traccio di ciò che viene scritto nella Search bar, utilizzato in seguito per una funzionalità di ricerca*/}
  const [searchTerm, setSearchTerm] = useState('');

  {/* Creo una funziona che gestisce il submit della ricerca (sia l'invio della tastiera nel form input sia sul tasto di ricerca)
      1) Evito il comportamento di default all'invio del form, per evitare di refreshare la pagina;
      2) Imposto come valore da ricercare ciò che viene scritto nel form;
      3) Riporto il numero di libri renderizzati a 12, (se in precedenza si clicca su Carica Altro si va ad aumentare la quantità di libri da caricare,
      al momento della ricerca non refreshando la pagina ilnumero rimane invariato, per questo motivo ri riporta questo numero al suo valore originale*/}
  const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(searchTerm);
      setNumToShow(12);
    };

  return (

    //La funzione in generale ritorna una navbar di Boostrap con all'interno un form per effettuare una ricerca
    <header>
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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-light" onClick={handleSubmit} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNav;