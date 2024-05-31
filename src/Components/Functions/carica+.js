//Funzione che aumenta il numero di libri da visualizare stabilito da numToShow
const caricaAltro = (numToShow, setNumToShow) => {
    const newNum = numToShow + 12;
    setNumToShow(newNum)
}

export default caricaAltro;