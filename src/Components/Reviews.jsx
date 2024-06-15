//IMPORT REACT USE STATE
import { useEffect } from "react";
import React, { useState } from "react";

//IMPORT COMPONENTI
import CommentList from "./CommentList"

function CommentArea (book) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        console.log(book)
        fetch(`https://striveschool-api.herokuapp.com/api/books/${book}/comments/`)
        .then(response => response.json())
        .then(data => setComments(data) )
    }, []);

    return (
        <CommentList comments={comments} />
    )
}

export default CommentArea;