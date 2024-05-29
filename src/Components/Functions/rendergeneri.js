import Card from 'react-bootstrap/Card';

const RenderGenres = ({generi, selectedGenre, setSelectedGenre}) => {
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

export default RenderGenres;