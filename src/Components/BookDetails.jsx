import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./Reviews";

function BookDetails({selectedGenre, generi}) {
    const {asin} = useParams();
    const bookList = generi.find(genere => genere === selectedGenre)
    const book = bookList.find(bookAsin => bookAsin.asin === asin)
    //.find(bookAsin => bookAsin === asin)
    console.log(book)
    return (
        <Row className="mx-2 ps-5">
            <Col sm={8}>
                <h2>{book.title}</h2>
                <img src={book.img} alt="Book Cover" className="ms-5"/>
                <h5>${book.price}</h5>
                <h6>Category: "{book.category}"</h6>
                <p>Code: "{book.asin}"</p>
            </Col>
            <Col sm={4} >
                <CommentArea asin={asin}/>
            </Col>
        </Row>
    )
}

export default BookDetails;