import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

function SingleBook(book) {
const [selected, setSelected] = useState(false);

    return (
        <Card style={{ width: '18rem' }} className={`mb-2`} border={`${selected ? 'danger' : ''}`} onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            {book.price}
            {book.asin}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default SingleBook;

