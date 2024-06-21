//IMPORT REACT USE STATE
import React, { useState, useEffect } from "react";

//IMPORT COMPONENTI
import CommentList from "./CommentList"
import Get from "./api/get"

//Funzione Principale
function CommentArea ({asin}) {
    //Definisco gli use state, il primo lo uso per il Get e il secondo per il Post
    const [comments, setComments] = useState([]);

    function startComments() {
        if(asin) {
            Get({setComments, asin});
        }
    }

    useEffect(() => {
        startComments();
    }, [asin]);

    return (
        <CommentList 
            comments={comments} 
            asin={asin} 
            startComments={startComments}   
        />
    )
}

export default CommentArea;