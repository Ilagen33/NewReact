import SingleBook from "../SingleBook";

const RenderBooks = ({selectedGenre, search, numToShow}) => {
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