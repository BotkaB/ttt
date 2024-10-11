import React, { useState } from "react"; // Importáljuk a React és a useState hook-ot
import AdatBekero from "./AdatBekero"; // Importáljuk az AdatBekero komponenst
import Tabla from "./Tabla"; // Importáljuk a Tabla komponenst

// Definiáljuk a Jatek komponenst
export default function Jatek() {
    // Állapotkezelés, hogy a játék elindult-e
    const [jatekIndult, setJatekIndult] = useState(false);
    // Állapotkezelés a játékosok nevéhez és a tábla méretéhez
    const [jatek1, setJatek1] = useState("");
    const [jatek2, setJatek2] = useState("");
    const [meret, setMeret] = useState(3);

    // Ez a függvény kezeli az új játék indítását
    const ujJatek = (j1 = "", j2 = "", meret = 3) => {
        setJatek1(j1); // Beállítjuk az első játékos nevét
        setJatek2(j2); // Beállítjuk a második játékos nevét
        setMeret(meret); // Beállítjuk a tábla méretét
        setJatekIndult(j1 !== "" && j2 !== ""); // Beállítjuk a jatekIndult állapotot
    };

    return (
        <div>
            {/* Ha a játék nem indult el, megjelenítjük az AdatBekero komponenst */}
            {!jatekIndult && <AdatBekero onSubmit={ujJatek} />}
            {/* Ha a játék elindult, megjelenítjük a Tabla komponenst */}
            {jatekIndult && <Tabla jatek1={jatek1} jatek2={jatek2} meret={meret} ujJatek={ujJatek} />}
        </div>
    );
}

