import React from "react"; // Importáljuk a React könyvtárat
import 'bootstrap/dist/css/bootstrap.min.css'; // Importáljuk a Bootstrap CSS-t

// Definiáljuk a Cella komponenst, amely props-okat fogad
export default function Cella(props) {
    return (
        // A td elem, amely a cellát képviseli
        <td
            className="border text-center align-middle" // Bootstrap osztályok: szegély, középre igazítás és függőleges középre igazítás
            onClick={props.onClick} // OnClick eseménykezelő hozzárendelése
            style={{
                cursor: 'pointer', // Mutató kéz kurzor
                width: '100px', // Szélesség: 100px
                height: '100px', // Magasság: 100px
                fontWeight: 'bold', // Félkövér betűstílus
                fontSize: '24px' // Betűméret: 24px
            }}
        >
            {props.value} 
        </td>
    );
}
