// IMPORT REACT E USESTATE
import React from "react";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment"

// IMPORT BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion';

// Funzione principale
function CommentList ({comments, book, startComments}) {
    return (
        <>
            <Accordion defaultActiveKey="0" alwaysOpen>
                {comments.map((comment, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>Comment {index + 1}</Accordion.Header>
                        <Accordion.Body>
                            <SingleComment comment={comment} startComments={startComments} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <AddComment book={book} startComments={startComments}/>
        </>
    );
}

export default CommentList;
