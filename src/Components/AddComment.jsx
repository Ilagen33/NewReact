//IMPORT REACT
import React, { useState } from 'react';
import Post from './api/post'

//IMPORT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddComment ({asin, startComments}) {
    const [recensione, setRecensione] = useState("");
    const [voto, setVoto] = useState("");
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            const data = {
                comment: recensione,
                rate: voto,
                elementId: asin
            };
            Post({data, startComments});
        }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Scrivi una recensione:</Form.Label>
                <Form.Control type="text" placeholder="Scrivi qui..." value={recensione} onChange={(e) => setRecensione(e.target.value)} required/>
            </Form.Group>
            <Form.Select aria-label="Default select example" value={voto} onChange={(e) => setVoto(e.target.value)}required>
                <option>Valuta da 1 a 5</option>
                <option value="1">Uno</option>
                <option value="2">Due</option>
                <option value="3">Tre</option>
                <option value="4">Quattro</option>
                <option value="5">Cinque</option>
            </Form.Select>
            <Button variant="outline-info" className='mt-3' type='submit'>Invia Recensione</Button>
        </Form>
    )
}

export default AddComment;