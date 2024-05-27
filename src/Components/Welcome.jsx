import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome() {
    const [show, setShow] = useState(true);
    return(
        <div className="mx-2">
            <h1>Welcome on Epi-Books!</h1>

            <Alert show={show} variant="info">
            <Alert.Heading>Welcome</Alert.Heading>
            <p>
              Benvenuto nella Web-App di libri epici. Qui potrai trovare tante letture interessanti e ricercate. Assurdo no? Cosa aspetti! <br /> Scopri tutti i nostri prodotti nel nostro archivio!
              Seleziona il genere che preferisci e scopri la nostra fantastica raccolta!
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-info" className='mx-2'>
                Close
              </Button>
            </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)} variant="outline-info" className='mx-2'>Raed our Message for You!</Button>}
        </div>
    )
}

export default Welcome;



function AlertDismissible() {
  

  return (
    <>
      
    </>
  );
}

