//IMPORT REACT E LO USESTATE
import React, { useState } from "react";

//IMPORT JSON (i generei dei libri)
import fantasy from '../Components/database-libri/fantasy.json'
import history from '../Components/database-libri/history.json'
import horror from '../Components/database-libri/horror.json'
import romance from '../Components/database-libri/romance.json'
import scifi from '../Components/database-libri/scifi.json'

//IMPORT COMPONENTI
import MyNav from "./MyNav.jsx";
import Welcome from "./Welcome.jsx";

//IMPORT FUNZIONI
import RenderGenres from "./Functions/rendergeneri.js"
import caricaAltro from "./Functions/carica+.js"
import RenderBooks from "./Functions/renderbooks.js"

//array contente tutti i generi (utilizzato inizialmente per scegliere il genere passato a RenderGenres)
const generi = [fantasy, history, horror, romance, scifi]

//Funzione principale
function Genres() {

    //creo uno stato per tenere traccia del genere selezionato e passarlo a RenderGenres
    const [selectedGenre, setSelectedGenre] = useState(null);
    //creo uno stato per tenere traccia di ciò che viene scritto nella barra di ricerca
    const [search, setSearch] = useState('')
    //creo uno stato per tenere traccia di quanti libri sono stati caricati
    const [numToShow, setNumToShow] = useState(12); // Numero iniziale di libri da mostrare= 12

    const startSearch = (text) => {
        console.log("Cerco", text)
        setSearch(text);
        setNumToShow(12); 
    }   
    
    return (
        <>  
            {/*Aggiungo la NAV, a cui passo la funzione startSearch perchè la search-bar è lì*/}
            <MyNav startSearch={startSearch}/>

            {/*Aggiungo il componente Welcome*/}
            <Welcome/>

            {/*Aggiungo degli h3 descrittivi, per indicare all'utente cosa fare*/}
            <h3 className={`mt-5 mx-2 ${selectedGenre !== null ? 'd-none' : '' }`}>Scegli tra uno dei seguenti generi:</h3>
            <h3 className={`mt-5 mx-2 ${selectedGenre == null ? 'd-none' : '' }`}>Scegli tra uno dei seguenti libri:</h3>

            {/*Aggiungo un blocco condizionale in cui aggiungo due bottoni:  e il div in cui verranno caricati i libri*/}
            {selectedGenre ? (
                <> 
                    <button onClick={() => {setSelectedGenre(null); setNumToShow(12)}} className="btn btn-outline-info mb-3 mx-2">
                        Torna ai generi
                    </button>
                    <div className="book-list mt-5 container mx-2">
                        <div className="row">
                            <RenderBooks selectedGenre={selectedGenre} search={search} numToShow={numToShow} />
                        </div>
                    </div>
                    {numToShow < selectedGenre.length && (
                    <button onClick={() => caricaAltro(numToShow, setNumToShow)} className="btn btn-outline-info mt-3 mx-2">
                        Carica Altro
                    </button>
                    )}
                </>
            ) : (
                <RenderGenres generi={generi} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            )}
        </>
    )
}

export default Genres;