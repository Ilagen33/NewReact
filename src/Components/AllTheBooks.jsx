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
import Description from "./Description.jsx";

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
            {selectedGenre ? (
                <> 
                    {/*Al click sul bottone si cambia lo stato della selezione del genere per cui vengono ricaricati i generi per effettuare una nuova selezione*/}
                    <button onClick={() => {setSelectedGenre(null); setNumToShow(12)}} className="btn btn-outline-info mb-3 mx-2">
                        Torna ai generi
                    </button>
                    <div className="book-list mt-5 container-fluid mx-2">
                        <div className="row">
                            {/*Vengono passate le informazioni: sul genere, su ciò che è scritto nel campo di ricerca, e quanti libri mostrare;
                            poichè sono state incluse delle funzionalità basate su queste informazioni*/}
                            <RenderBooks selectedGenre={selectedGenre} search={search} numToShow={numToShow} />
                        </div>
                    </div>

                    {/*Aggiungo un altro blocco condizionale in cui verifico se la lunghezza dei numeri visualizzare è minore rispetto tutti i libri visualizzabili;
                    in parole povere verifico se ci sono altri libri da visualizzare o meno;
                    in base a questa condizione inserisco un bottone che ha la funzione di caricare altri libri nel caso ce ne fossero altri;
                    una volta che sono stati renderizzati tutti i libri disponibili, non si visualizzerà più il bottone, grazie al blocco condizionale*/}
                    {numToShow < selectedGenre.length && (
                    <button onClick={() => caricaAltro(numToShow, setNumToShow)} className="btn btn-outline-info mt-3 mx-2">
                        Carica Altro
                    </button>
                    )}
                </>
            ) : (
                <RenderGenres generi={generi} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            )}
        </main>
    )
}

export default Genres;