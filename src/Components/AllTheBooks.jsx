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
import RenderGenres from "./rendergeneri.jsx"
import RenderBooks from "./renderbooks.jsx"
import Description from "./Description.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//array contente tutti i generi (utilizzato inizialmente per scegliere il genere passato a RenderGenres)
const generi = [fantasy, history, horror, romance, scifi]

//Funzione principale
function Genres() {

// Stati per gestire il genere selezionato, la ricerca e il numero di libri da mostrare
const [selectedGenre, setSelectedGenre] = useState(null); // Genere selezionato
const [search, setSearch] = useState(''); // Ricerca
const [numToShow, setNumToShow] = useState(12); // Numero iniziale di libri da mostrare = 12   
// const [changeTheme, setChangeTheme] = useContext(Theme);

    return (
        <Router>
            <main>  
                {/*Aggiungo la NAV*/}
                <MyNav setSearch={setSearch} setNumToShow={setNumToShow}/>

                {/*Aggiungo il componente Welcome*/}
                <Welcome/>

                {/*Aggiungo degli h3 descrittivi, per indicare all'utente cosa fare*/}
                <Description selectedGenre={selectedGenre} />

                {/*Aggiungo un blocco condizionale in cui: se stato selezionato un genere vengono renderizzati i libri,
                un bottone che torna alla selezione dei generi e un pulsante che carica ulteriori contenuti(se disponibili);
                altrimenti vengono renderizzati i generi a disposizione*/}
                <Routes>
                    <Route 
                        path="/books/:selectedGenre"
                        element={
                            <RenderBooks 
                                selectedGenre={selectedGenre} 
                                search={search} 
                                numToShow={numToShow} 
                                setNumToShow={setNumToShow}
                                setSelectedGenre={setSelectedGenre}
                                />
                        }
                    />
                    <Route 
                        path="/" 
                        element={
                            <RenderGenres 
                                generi={generi} 
                                selectedGenre={selectedGenre} 
                                setSelectedGenre={setSelectedGenre} 
                            />
                        }
                    />
                </Routes>
            </main>
        </Router>
    );
}

export default Genres;