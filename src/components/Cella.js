import React from "react";
import './Cella.css';

export default function Cella(props) {
//ez egy sima div, aminek biztos, hogy van eseménykezelője, ami az értékét kell visszaadja.
    return (

        <div className="cella" onClick={props.onClick}>
            {props.value}
        </div>
    );
}
