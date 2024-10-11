import React from "react";
import './Cella.css';

export default function Cella(props) {
//ez egy sima cella, aminek biztos, hogy van eseménykezelője, ami az értékét kell visszaadja.
    return (

        <td className="cella" onClick={props.onClick}>
            {props.value}
        </td>
    );
}
