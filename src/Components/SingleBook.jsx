//IMPORT REAT E USESTATE
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

//IMPORT COMPONENTI
import CommentArea from './Reviews';

//Funzione principale
//Crea una card per ogni libro, se selezionato crea un bordo rosso
//ricavo i dati dalla prop (book) 
function SingleBook(book) {
const [selected, setSelected] = useState(false);

    return (
      <div className={`${selected? 'col-12 d-flex gap-3' : 'col'}`}>
        <Card style={{ width: '18rem' }} className={`mb-2 `} border={`${selected ? 'danger' : ''}`} onClick={() => setSelected(!selected)}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.price}
              {book.asin}
            </Card.Text>
          </Card.Body>
        </Card>
        {selected && (
          <CommentArea asin={book.asin}/>
        )}
      </div> 
    )
}

export default SingleBook;

