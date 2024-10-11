import React, { useState, useEffect } from "react"; // Importáljuk a React és a useState, useEffect hook-okat
import Sor from "./Sor"; // Importáljuk a Sor komponenst
import AdatKiir from "./AdatKiir"; // Importáljuk az AdatKiir komponenst

// Definiáljuk a Tabla komponenst, amely props-okat fogad: jatek1, jatek2, meret, ujJatek
export default function Tabla({ jatek1, jatek2, meret, ujJatek }) {
    // Állapotkezelés a cellák értékeihez
    const [cellaErtekek, setCellaErtekek] = useState([]);
    // Állapotkezelés, hogy ki következik (X vagy O)
    const [kovetkezo, setKovetkezo] = useState('X');
    // Állapotkezelés a győztes nyomon követésére
    const [gyoztes, setGyoztes] = useState(null);
    // Állapotkezelés az aktuális játékos nevének tárolására
    const [aktualisJatekos, setAktualisJatekos] = useState(jatek1);

    // useEffect, amely a cellaErtekek állapotot állítja be a tábla méretének megfelelően
    useEffect(() => {
        if (meret && Number.isInteger(meret) && meret > 0) {
            setCellaErtekek(Array(meret * meret).fill(null));
        }
    }, [meret]);

    // Ez a függvény kezeli a cellákra való kattintást
    const cellaKlikkKezelo = (index) => {
        // Ha a cella már tele van, vagy van győztes, ne csinálj semmit
        if (cellaErtekek[index] || gyoztes) return;

        // Állítsd be az új cella értékét
        const ujCellaErtekek = [...cellaErtekek];
        ujCellaErtekek[index] = kovetkezo;
        setCellaErtekek(ujCellaErtekek);

        // Ellenőrizzük, van-e győztes
        const nyertes = ellenorizGyoztes(ujCellaErtekek, meret);
        if (nyertes) {
            setGyoztes(aktualisJatekos);
        } else {
            // Váltsd meg a következőt és az aktuális játékost
            setKovetkezo(kovetkezo === 'X' ? 'O' : 'X');
            setAktualisJatekos(aktualisJatekos === jatek1 ? jatek2 : jatek1);
        }
    };

    // Függvény a győztes ellenőrzésére
    function ellenorizGyoztes(cellaErtekek, n) {
        // Vízszintes és függőleges ellenőrzés
        for (let i = 0; i < n; i++) {
            // Vízszintes ellenőrzés
            if (cellaErtekek[i * n] && cellaErtekek.slice(i * n, i * n + n).every(cella => cella === cellaErtekek[i * n])) {
                return cellaErtekek[i * n];
            }
            // Függőleges ellenőrzés
            if (cellaErtekek[i] && Array.from({ length: n }).every((_, j) => cellaErtekek[i + j * n] === cellaErtekek[i])) {
                return cellaErtekek[i];
            }
        }
        // Átlós ellenőrzés
        if (cellaErtekek[0] && Array.from({ length: n }).every((_, i) => cellaErtekek[i * (n + 1)] === cellaErtekek[0])) {
            return cellaErtekek[0];
        }
        if (cellaErtekek[n - 1] && Array.from({ length: n }).every((_, i) => cellaErtekek[(i + 1) * (n - 1)] === cellaErtekek[n - 1])) {
            return cellaErtekek[n - 1];
        }
        // Ha nincs győztes
        return null;
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {/* Az AdatKiir komponens megjelenítése */}
            <AdatKiir aktualisJatekos={aktualisJatekos} gyoztes={gyoztes} ujJatek={ujJatek} cellaErtekek={cellaErtekek} />
            <table className="table table-bordered" style={{ tableLayout: 'fixed', width: 'fit-content' }}>
                <tbody>
                    {/* Létrehozzuk az n darab sort */}
                    {Array(meret).fill(null).map((_, i) => (
                        <Sor
                            key={i} // Egyedi kulcs minden sornak
                            sorIndex={i} // A sor indexe
                            n={meret} // A tábla mérete
                            cellaErtekek={cellaErtekek} // A cellák aktuális értékei
                            cellaKlikkKezelo={cellaKlikkKezelo} // A cellákra kattintás kezelő függvény
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
