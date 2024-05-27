import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import SingleBook from "./SingleBook.jsx";
import fantasy from '../Components/database-libri/fantasy.json'
import history from '../Components/database-libri/history.json'
import horror from '../Components/database-libri/horror.json'
import romance from '../Components/database-libri/romance.json'
import scifi from '../Components/database-libri/scifi.json'
import MyNav from "./MyNav.jsx";
import Welcome from "./Welcome.jsx";

const generi = [fantasy, history, horror, romance, scifi]

function Genres() {
    //creo uno stato per tenere traccia del genere selezionato
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [numToShow, setNumToShow] = useState(12); // Numero iniziale di libri da mostrare
    const [search, setSearch] = useState('')

    const startSearch = (text) => {
        console.log("Cerco", text)
        setSearch(text);
        setNumToShow(12); 
    }
    //renderizzare i libri di un genere
    const renderBooks = (genere) => {
        return genere.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())).slice(0, numToShow).map((book, index) => (
            <div className="col">
                <SingleBook {...book} key={index}/>
            </div>
        ))
    }
    const caricaAltro = () => {
        const newNum = numToShow + 12;
        setNumToShow(newNum)
    }
    const renderGenres = () => {    
        return (
            generi.map( (genere, index) => {
                const name = genere[0].category;
                return(
                //quando clicco su una card, aggiorna lo stato del genere selezionato
                <Card key={index}  className={`my-5 ${selectedGenre === genere ? 'd-none' : ''}`} border="info" onClick={() => setSelectedGenre(genere)}>
                    <Card.Body className="py-3 text-info">{name}</Card.Body>
                </Card>
                );
            })
        )
    }

    return (
        <>
            <MyNav startSearch={startSearch}/>
            <Welcome/>
            <h3 className={`mt-5 mx-2 ${selectedGenre !== null ? 'd-none' : '' }`}>Scegli tra uno dei seguenti generi: </h3>
            <h3 className={`mt-5 mx-2 ${selectedGenre == null ? 'd-none' : '' }`}>Scegli tra uno dei seguenti libri:</h3>
            {selectedGenre ? (
                <> 
               
                    <button onClick={() => {setSelectedGenre(null); setNumToShow(12)}} className="btn btn-outline-info mb-3 mx-2">
                        Torna ai generi
                    </button>
                    <div className="book-list mt-5 container mx-2">
                        <div className="row">
                            {renderBooks(selectedGenre)}
                        </div>
                    </div>
                    {numToShow < selectedGenre.length && (
                    <button onClick={caricaAltro} className="btn btn-outline-info mt-3 mx-2">
                        Carica Altro
                    </button>
                    )}
                </>
            ) : (
                renderGenres()
            )
            }
        </>
    )
}

export default Genres;

