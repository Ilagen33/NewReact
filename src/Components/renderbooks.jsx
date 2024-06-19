//IMPORT COMPONENTE SINGLEBOOK
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CaricaAltro from "./Functions/carica+";

//Funzione prende come valori: il genere selezionato, la stringa scritta nel form di ricerca e il numero di libri da caricare
const RenderBooks = ({selectedGenre, search, numToShow, setNumToShow, setSelectedGenre}) => {
    //la funzione ritorna SingleBook al quale viene passato il dato book
    //book viene ricavato da selectedGenre, cioè dall'array del genere selezionato;
    //dall'array vengono filtrati i risultati in base alla stringa di ricerca (search),
    //se il titolo del libro corrisponde in parte alla ricerca allora viene preso;
    //inoltre, viene presa solo una parte del risultato cioè (numToShow); non vengono caricati tutti i libri disponibili,
    //ma si ha un array di libri di lunghezza determinata da numToShow
    //infine, viene fatto il map per ricavare ogni libro dall'array risultante
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    return(
        <Row className="container-fluid mt-5">

            <button onClick={() => {setSelectedGenre(null)
                                    setNumToShow(12)
                                    navigate('/')}
                            } 
                    className="btn btn-outline-info mb-3 mx-2"
            >
                Torna ai generi
            </button>
            
            <h3>Scegli tra uno dei seguenti libri:</h3>
            <Col className="book-list container-fluid mx-2">
                <Row className="d-flex justify-content-center">
                    {selectedGenre
                        .filter((book) => book.title
                                            .toLowerCase()
                                            .includes(search.toLowerCase()))
                        .slice(0, numToShow)
                        .map((book, index) => (
                            <SingleBook 
                                book={book} 
                                key={index} 
                                setSelected={setSelected} 
                                selected={selected}
                            />       
                        ))
                    }
                </Row>
                {numToShow < selectedGenre.length && (
                    <button onClick={() => CaricaAltro(numToShow, setNumToShow)} className="btn btn-outline-info mt-3 mx-2">
                        Carica Altro
                    </button>
                )}
            </Col>
        </Row>
    )
}

export default RenderBooks;