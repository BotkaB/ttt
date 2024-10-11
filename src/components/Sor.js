import React from "react"; // Importáljuk a React könyvtárat
import Cella from "./Cella"; // Importáljuk a Cella komponenst

// Definiáljuk a Sor komponenst, amely props-okat fogad: sorIndex, n, cellaErtekek, cellaKlikkKezelo
export default function Sor({ sorIndex, n, cellaErtekek, cellaKlikkKezelo }) {
    return (
        <tr>
            {/* Létrehozzuk az n darab cellát */}
            {Array(n).fill(null).map((_, i) => (
                <Cella
                    key={sorIndex * n + i} // Egyedi kulcs minden cellának, amely a sor indexe és a cella indexének szorzata
                    value={cellaErtekek[sorIndex * n + i]} // Beállítjuk a cella értékét, a cellaErtekek tömb megfelelő indexéről
                    onClick={() => cellaKlikkKezelo(sorIndex * n + i)} // Hozzárendeljük a kattintási eseménykezelőt, amely a cella indexét adja át
                />
            ))}
        </tr>
    );
}
