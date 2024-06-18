//IMPORT REACE E USE EFFECT
import React, { useState } from "react";
import NewModal from "./Modal";

//IMPORT BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Delete from './api/delete';

function SingleComment ({comment, startComments}) {
    const [showModal, setShowModal] = useState(false);
    const [currentComment, setCurrentComment] = useState(comment);

    const handleUpdateComment = (updatedComment) => {
        setCurrentComment(updatedComment);
        setShowModal(false);
        startComments();
    };

    const handleDelete = async (comment) => {
        try {
            await Delete(comment._id); // Attendere che l'eliminazione sia completata
            startComments(); // Chiamare startComments solo dopo che l'eliminazione è stata completata con successo
        } catch (error) {
            console.error('Errore durante l\'eliminazione del commento:', error);
            // Gestire eventuali errori qui, se necessario
        }
    };

    return (
        <>
            <Accordion.Body>
                <p>{comment.comment}</p>
                <span>{comment.rate}</span>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="warning" onClick={()=>setShowModal(true)}>Modifica</Button>
                    <Button variant="danger" onClick={()=>handleDelete(comment)}>Elimina</Button>
                </ButtonGroup>
            </Accordion.Body>
             <NewModal
             show={showModal}
             onHide={() => setShowModal(false)}
             comment={currentComment}
             onUpdate={handleUpdateComment}
             startComments={startComments}
            />
        </>
    )
}

export default SingleComment;