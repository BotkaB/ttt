import React from "react"; // Importáljuk a React könyvtárat
import Gomb from "./Gomb"; // Importáljuk a Gomb komponenst

// Definiáljuk az AdatKiir komponenst, amely props-okat fogad: aktualisJatekos, gyoztes, ujJatek, cellaErtekek
export default function AdatKiir({ aktualisJatekos, gyoztes, ujJatek, cellaErtekek }) {
    // Eldönti, hogy van-e döntetlen
    const isDontetlen = cellaErtekek.every(cella => cella !== null) && !gyoztes;

    return (
        <div>
            {/* Ha nincs győztes és nincs döntetlen, megjeleníti az aktuális játékost */}
            {!gyoztes && !isDontetlen && <h3>{aktualisJatekos} következik</h3>}
            {/* Ha van győztes, megjeleníti a győztest és az Új játék gombot */}
            {gyoztes && (
                <div>
                    <h3>Győztes: {gyoztes}</h3>
                    <Gomb szoveg="Új játék" onClick={() => ujJatek()} />
                </div>
            )}
            {/* Ha van döntetlen, megjeleníti a döntetlen üzenetet és az Új játék gombot */}
            {isDontetlen && (
                <div>
                    <h3>Döntetlen!</h3>
                    <Gomb szoveg="Új játék" onClick={() => ujJatek()} />
                </div>
            )}
        </div>
    );
}
