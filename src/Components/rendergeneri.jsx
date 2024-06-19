// IMPORT DA BOOTSTRAP
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

// Funzione principale
// Questa funzione crea delle card con il nome del genere dei libri
const RenderGenres = ({ generi, setSelectedGenre }) => {
    const navigate = useNavigate()
    return (
        // Si effettua un map per ricavare dall'array che contiene tutti gli array dei generi, tutti i generi.
        generi.map((genere, index) => {
            // Si prende dal primo libro di ogni array il nome del genere, dall'attributo category
            const name = genere[0].category;
            return (
                // Per ogni genere viene creata una card. 
                // Se lo stato selectedGenre corrisponde a genere, allora la card non sarà visibile.
                // Al click della card viene modificato lo stato selectedGenre e viene impostato al genere cliccato.
                // In modo tale che al click su un genere, questi spariscano e lascino spazio al render dei libri
                <>
                    <h3>Scegli tra uno dei seguenti generi:</h3>
                    <Card 
                        key={index}  
                        className={`my-5 mx-2`} 
                        border="info" 
                        onClick={() =>  {   setSelectedGenre(genere);
                                            navigate(`/books/${name}`)
                                        }
                        }
                    >
                        <Card.Body className="py-3 text-info">{name}</Card.Body>
                    </Card>
                </>
            );
        })
    );
}

export default RenderGenres;
