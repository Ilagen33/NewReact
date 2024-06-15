//IMPORT REACT
import React from 'react';

//IMPORT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddComment () {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Scrivi una recensione:</Form.Label>
                <Form.Control type="text" placeholder="Scrivi qui..." required/>
            </Form.Group>
            <Form.Select aria-label="Default select example" required>
                <option>Valuta da 1 a 5</option>
                <option value="1">Uno</option>
                <option value="2">Due</option>
                <option value="3">Tre</option>
                <option value="4">Quattro</option>
                <option value="5">Cinque</option>
            </Form.Select>
            <Button variant="outline-info" className='mt-3'>Info</Button>
        </Form>
    )
}

export default AddComment;