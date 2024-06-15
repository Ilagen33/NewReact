// IMPORT REACT E USESTATE
import React, { useState } from "react";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment"

// IMPORT BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion';

// Funzione principale
function CommentList ({comments}) {
    return (
        <>
            <Accordion defaultActiveKey="0">
                {comments.map((comment, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>Comment {index + 1}</Accordion.Header>
                        <Accordion.Body>
                            <SingleComment {...comment} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <AddComment />
        </>
    );
}

export default CommentList;
