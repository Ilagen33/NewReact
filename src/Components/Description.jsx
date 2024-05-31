//IMPORT REACT
import React from "react";

//funzione principale
function Description({selectedGenre}) {
    console.log(selectedGenre)
    //la funzione ritorna una h3 al cui interno il valore cambia in base al valore selectedGenre, 
    //se non è stato selezionato nessun valore per il genere si visualizza "Scegli tra uno dei seguenti generi",
    //se è stato selezionato un genere (e quindi sono stati renderizzati i libri), si visualizza "Scegli tra uno dei seguenti libri"
    return (
        <h3 className={`mt-5 mx-2`}>
            {selectedGenre ? "Scegli tra uno dei seguenti libri:" : "Scegli tra uno dei seguenti generi:"}
        </h3>
    )
}

export default Description;