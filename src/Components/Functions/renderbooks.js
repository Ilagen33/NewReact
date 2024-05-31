//IMPORT COMPONENTE SINGLEBOOK
import SingleBook from "../SingleBook";

//Funzione prende come valori: il genere selezionato, la stringa scritta nel form di ricerca e il numero di libri da caricare
const RenderBooks = ({selectedGenre, search, numToShow}) => {
    //la funzione ritorna SingleBook al quale viene passato il dato book
    //book viene ricavato da selectedGenre, cioè dall'array del genere selezionato;
    //dall'array vengono filtrati i risultati in base alla stringa di ricerca (search),
    //se il titolo del libro corrisponde in parte alla ricerca allora viene preso;
    //inoltre, viene presa solo una parte del risultato cioè (numToShow); non vengono caricati tutti i libri disponibili,
    //ma si ha un array di libri di lunghezza determinata da numToShow
    //infine, viene fatto il map per ricavare ogni libro dall'array risultante
    return( 
        selectedGenre
        .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
        .slice(0, numToShow)
        .map((book, index) => (
            <SingleBook {...book} key={index}/>        
        ))
    )
}

export default RenderBooks;