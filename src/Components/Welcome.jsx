//IMPORT REACT E USESTATE
import React, { useState } from 'react';

//IMPORT BOOTSTRAP
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

//Funzione principale
function Welcome() {

    //Creo uno stato per comprimere e decomprimere l'alert di benvenuto previsto dalla traccia
    const [show, setShow] = useState(true);

    //la funzione in generale restituisce un titolo e un Alert (di Bootstrap)
    return(
        <section className="JUMBOTRON mx-2">
            <h1>Welcome on Epi-Books!</h1>

            {/*L'alert sfrutta lo stato precedentemente descritto: se il valore dello stato è true, si visualizza l'alert*/}
            <Alert 
              show={show} 
              variant="info"
            >
              <Alert.Heading>Welcome</Alert.Heading>
              <p>
                Benvenuto nella Web-App di libri epici. Qui potrai trovare tante letture interessanti e ricercate. Assurdo no? Cosa aspetti! <br /> 
                Scopri tutti i nostri prodotti nel nostro archivio!
                Seleziona il genere che preferisci e scopri la nostra fantastica raccolta!
              </p>
              <hr />

              <div className="d-flex justify-content-end">
                {/*Al Bottone dell'alert viene data la funzione onClick che modifica lo stato di "show" e lo rende false (in modo tale da comprimere l'alert)*/}
                <Button 
                  onClick={() => setShow(false)} 
                  variant="outline-info" 
                  className='mx-2'
                >
                  Close
                </Button>
              </div>

            </Alert>
            {/*Aggiungo un blocco condizionale, se show è false allora si ha un bottone che al click modifica show, lo rende true,
             così da poter visualizzare l'alert (che con false non è visibile)*/}
            {!show && <Button 
                          onClick={() => setShow(true)} 
                          variant="outline-info" 
                          className='mx-2'
                      >
                        Raed our Message for You!
                      </Button>}
        </section>
    )
}

export default Welcome;

