import React from "react";

// Definiáljuk a Gomb komponenst
// A "props" a komponensek közötti adatátvitel eszköze, és a "prop" az egyes tulajdonságokra utal
export default function Gomb({ szoveg, onClick }) {
    return (
        <button className="btn btn-primary mt-3" onClick={onClick}>
            {szoveg} {/*A gomb szövegét a `szoveg` prop biztosítja*/}
        </button>
    );
}
