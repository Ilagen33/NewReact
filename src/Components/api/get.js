
function Get({setComments, asin}) {
    if (!asin) {
        console.error("ASIN non valido");
        return; // Esci dalla funzione se asin non è definito
    }
    fetch(`https://striveschool-api.herokuapp.com/api/books/`+asin+`/comments/`, {
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjRmYjBiM2IyNTAwMTUxYjU0MzkiLCJpYXQiOjE3MTg1MzI0MzUsImV4cCI6MTcxOTc0MjAzNX0.411aAMIVL8y0p7Gb6zW0X0O0HdL6JTgOXZi7PvlMJ4A"}
    })
        .then(response => response.json())
        .then(data => setComments(data))
        .catch((error) => console.error("Oh no..." + error))
}

export default Get;