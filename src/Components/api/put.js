async function Put({ id, updatedComment}) {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjRmYjBiM2IyNTAwMTUxYjU0MzkiLCJpYXQiOjE3MTg1MzI0MzUsImV4cCI6MTcxOTc0MjAzNX0.411aAMIVL8y0p7Gb6zW0X0O0HdL6JTgOXZi7PvlMJ4A",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedComment)
        });

        if (!response.ok) {
            throw new Error('Errore nella richiesta PUT');
        }
        return response.json(); // Ritorno della promessa contenente i dati JSON
    
    } catch (error) {
        console.error('Errore nella richiesta PUT:', error);
        throw error; // Rilancia l'errore per gestirlo più in alto, se necessario
    }
}

export default Put