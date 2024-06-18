import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Put from './api/put';

function NewModal({ show, onHide, comment, onUpdate, startComments}) {
    const [recensione, setRecensione] = useState("");
    const [voto, setVoto] = useState("");
    const id= comment._id;
    console.log(comment)
    console.log(id)

    useEffect(() => {
        if (comment) {
            setRecensione(comment.comment);
            setVoto(comment.rate);
        }
    }, [comment]);

    const handleSaveClick = () => {
        const updatedComment = {
            ...comment,
            comment: recensione,
            rate: voto
        };
        console.log(updatedComment)
        Put({id, updatedComment})
        .then(updatedComment => {
            onUpdate(updatedComment); // Invia i dati aggiornati al genitore
            onHide(); // Chiudi il modal dopo aver salvato le modifiche
            
        })
        .catch(error => {
            console.error('Errore nella modifica del commento:', error);
        });
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modifica Recensione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Scrivi una recensione:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Scrivi qui..."
                            value={recensione}
                            onChange={(e) => setRecensione(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Select aria-label="Default select example" value={voto} onChange={(e) => setVoto(e.target.value)} required>
                        <option>Valuta da 1 a 5</option>
                        <option value="1">Uno</option>
                        <option value="2">Due</option>
                        <option value="3">Tre</option>
                        <option value="4">Quattro</option>
                        <option value="5">Cinque</option>
                    </Form.Select>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Chiudi</Button>
                <Button variant="primary" onClick={handleSaveClick}>Salva Modifiche</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewModal;