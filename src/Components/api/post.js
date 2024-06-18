

function Post ({data, startComments}) {
    console.log(data)
    const response =
        fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjRmYjBiM2IyNTAwMTUxYjU0MzkiLCJpYXQiOjE3MTg1MzI0MzUsImV4cCI6MTcxOTc0MjAzNX0.411aAMIVL8y0p7Gb6zW0X0O0HdL6JTgOXZi7PvlMJ4A",
            "Content-Type" : "application/json"    
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        response.json();
        startComments();
    })
    .catch((error) => console.error("Mannaggia la miseria..." + error))
}



export default Post;