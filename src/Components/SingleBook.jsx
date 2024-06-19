//IMPORT REAT E USESTATE
import React from "react";
import Card from 'react-bootstrap/Card';

//IMPORT COMPONENTI
import { Col } from "react-bootstrap";

//Funzione principale
//Crea una card per ogni libro, se selezionato crea un bordo rosso
//ricavo i dati dalla prop (book) 
function SingleBook({book, setSelected, selected}) {
    return (
      <Col xs="auto" className="px-0 mx-1">
        <Card style={{ width: '18rem' }} className={`mb-2 px-0`} border={`${selected === book.asin ? 'danger' : ''}`} onClick={() => setSelected(book.asin)}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.price}
              {book.asin}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col> 
    )
}

export default SingleBook;

