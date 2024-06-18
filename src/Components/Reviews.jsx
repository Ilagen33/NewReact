//IMPORT REACT USE STATE
import { useEffect } from "react";
import React, { useState } from "react";

//IMPORT COMPONENTI
import CommentList from "./CommentList"
import Get from "./api/get"

//Funzione Principale
function CommentArea (book) {
    //Definisco gli use state, il primo lo uso per il Get e il secondo per il Post
    const [comments, setComments] = useState([]);

    function startComments() {
        Get({setComments, book})
    }
    useEffect(() => {
        startComments()
    }, [book]);
    return (
        <CommentList comments={comments} book={book} startComments={startComments}/>
    )
}

export default CommentArea;