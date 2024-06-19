import React from "react";
import Alert from 'react-bootstrap/Alert';

export default function NotFound () {
    return (
        <Alert variant={"danger"} className="mx-2">
          Ci dispiace, la pagina non è stata trovata :C
        </Alert>
    )
}