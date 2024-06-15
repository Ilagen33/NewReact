//IMPORT REACE E USE EFFECT
import React, { useState } from "react";

//IMPORT BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion';

function SingleComment (comment, key) {
    <Accordion.Item>
        <Accordion.Header>Recensione {key}</Accordion.Header>
        <Accordion.Body>
            {comment.body}
        </Accordion.Body>
      </Accordion.Item>
}

export default SingleComment;