//IMPORT REAT E USESTATE
import React from "react";
import Card from 'react-bootstrap/Card';

//IMPORT COMPONENTI
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Funzione principale
//Crea una card per ogni libro, se selezionato crea un bordo rosso
//ricavo i dati dalla prop (book) 
function SingleBook({book, setSelected, selected}) {
  const navigate = useNavigate();
    return (
      <Col xs="auto" className="px-0 mx-1">
        <Card 
          style={{ width: '18rem' }} 
          className={`mb-2 px-0`} 
          border={`${selected === book.asin ? 'danger' : ''}`} 
          onClick={() => setSelected(book.asin)}
          data-testid="cardBooks"
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              ${book.price}
            </Card.Text>
            <Button variant="dark" onClick={() => navigate('/details/'+book.asin)}>Details</Button>
          </Card.Body>
        </Card>
      </Col> 
    )
}

export default SingleBook;

