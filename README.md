# EpiBooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## W1D4 Create EpiBooks

### `Creazione della nostra prima applicazione React`

Innanzitutto installiamo e importiamo Bootstrao x React.
Creiamo diversi componenti:

- MyNav: in cui viene renderizzata una navbar di bootstrap con i link: Home, About e Browse.
- MyFooter: che renderizzerà un footer pper l'applicazione.
- Welcome: che renderizzerà un Alert e un titolo per l'applicazione
- AllTheBooks: inizialmente utilizzanta per renderizzare utti i libri ricavati da uno dei json forniti. In seguito è stato modificato.

## W2D1 Crezione di SingleBook

### `Creazione di un componente che renderizzarà i singoli libri`

Creiamo un componente di nome SingleBook che riceverà un libro come prop, ne renderizzerà la copertina e il titolo. Abbiamo implemento le card di Bootstrap.

- Andiamo a modificare AllTheBooks in modo tale che il .map() renderizzi una lista di componenti SingleBook
- Andiamo a creare un input di testo (che poi sarà modificato e spostato) utilizzando per filtare i libri in base al loro titolo
- **Extra**: Creiamo uno stato di nome selected (che poi sarà modificato), Al cui click cambierà valore, questo riceverà solo valori booleani (per ora). Quando selected sarà true, la card avrà un bordo rosso
 
## W2D4 Inserimento delle chiamate API  

### ` Implementazione di: **GET, POST, PUT e DELETE**`

Creiamo diversi componenti:
- CommentArea: sarà inzialmente incorporato in SingleBook e mostrato al click su di esso, poi è stato modificato e spostato; all'interno bisogna eseguire la fetch
- CommentList: riceverà una lista di recensioni da CommentArea come prop poi utilizzando il componente SingleBook renderizzerà la lista di commenti
- SingleComment: utilizzando per renderizzare i singoli commenti
- AddComment: conterrà un form per raccogliere il testo della recensione  ela valutazione da 1 a 5; una volta raccolti idai, tramite un bottone, al click veràà effettuate una chiamata POST per inviare la recensione.
- **EXTRA**: Inserita la possibilità di esseguire DELETE E PUT; il delete tramite il click su un bottone con didascalia 'Elimina'; il Put tramite un bottone con didascalia 'Modifica' che al click apre un Modal in cui si inseriscono i dati da modificare.

## W3D1 State Elevation e React.Context

### `Implementazione dello state elevation spostando il campo di ricerca nella navbar e il React.Context implementando un tema che potrà essere chiaro scuro`

- Modificato l'input di ricerca e sostaato nella navbar
- React.Context per condividere con l'intera applicazione una proprietà 'Theme'; il suo valore può essere light o dark, e deve influenzare qualche proprietà visiva dei componenti principali. E' stato fornito un bottone nella nav per poter modificare la proprietà 'Theme'. **WORK IN PROGRESS**

## W3D4 Modifiche al Layout

### `CommentArea`

- Spostato CommentArea in BookDetails. Create due colonne, a sinistra la copertina dei libri a destra CommentArea. Di conseguenza CommentArea non riceverà più direttamente un libro per effettuare la fetch delle recensioni. Modificato il valore di Selected non conterrà più un booleano ma conterrà l'ain del libro su cui si è cliccato.

## W4D1

### `Utilizzo di Ruoter`

Creiamo diverse rotte con l'utilizzo di react-router-dom:
- Una rotta per l'homepage che punta a '/' e carica i generi
- Una rotte per un componente NotFound che viene renderizzato ogni volta che l'utente naviga su una rotta non gestita
- Una rotta per un nuovo componente BookDetails. In cui deve passare un parametro ASIN, a cui si potrà accedere tramite un pulsante in SingleBook, infine il componente recupererà il paramtro ASIN e caricherà le informazinoi del libro selezionato.

## W4D4

### `Utilizzo dei test`

Verranno aggiunti dei test per completare il progetto:
- **TEST 1**: Verifico che il componente WELCOME venga montato correttamente.
- **TEST 2**: Verifico che vengano effettivamente renderizzate tante bootstrap card quanti sono i libri nel fil ejson utilizzato 
- **TEST 3**: Verifico che il componente CommentArea venga renderizzato correttamente
- **TEST 4**: Verifico che il filtraggio dei libri si comorti come previsto
- **TEST 5**: Verifico che cliccando su un libro il suo bordo cambi colore
- **TEST 6**: Verifico che cliccando su un secondo libro dopo il primo, il bordeo del primo libro ritorni normale
- **TEST 7**: Verifico che all'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci sinao istanze dek componente SingleBook nel DOM **NON RIUSCITO**
- **TEST 8**: Verifico che cliccando su un libro con recensioni, esse vengano caricate correttamente all'interno del DOM

