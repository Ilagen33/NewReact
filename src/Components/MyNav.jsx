//IMPORT REACT E USESTATE
import React, { useContext, useState } from "react";

//IMPORT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Theme } from "../Modules/Context";

//Funzione principale
function MyNav({ setSearch, setNumToShow }) {

  {/*Creo uno useContext per poter modificare il tema dell'app */}
  const { theme, setTheme } = useContext(Theme); // Corretta utilizzazione di useContext

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
            <Button variant="light" className="pt-0 px-2 me-2 rounded-circle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            { theme === 'light' ? ( 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme} className="bi bi-moon" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
              </svg> ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme} className="bi bi-sun" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
              </svg>
              )}

            </Button>
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