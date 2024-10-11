import React, { useState } from "react"; // Importáljuk a React és a useState hook-ot

// Definiáljuk az AdatBekero komponenst, amely props-okat fogad: onSubmit
export default function AdatBekero({ onSubmit }) {
    // Állapotkezelés a játékosok neveihez és a tábla méretéhez
    const [jatek1, setJatek1] = useState("");
    const [jatek2, setJatek2] = useState("");
    const [meret, setMeret] = useState(3);

    // Ez a függvény kezeli az űrlap beküldését
    const adatBekeroSubmit = (e) => {
        e.preventDefault(); // Megakadályozza az alapértelmezett űrlap beküldési viselkedést
        if (jatek1 && jatek2) { // Ellenőrzi, hogy mindkét név be van-e írva
            onSubmit(jatek1, jatek2, meret); // Meghívja az onSubmit függvényt a begyűjtött adatokkal
        }
    };

    return (
        <form onSubmit={adatBekeroSubmit} className="d-flex flex-column align-items-center">
            <div className="form-group">
                <label>Játékos 1 neve:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={jatek1} 
                    onChange={(e) => setJatek1(e.target.value)} // Frissíti az állapotot az új értékkel
                    required 
                />
            </div>
            <div className="form-group">
                <label>Játékos 2 neve:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={jatek2} 
                    onChange={(e) => setJatek2(e.target.value)} // Frissíti az állapotot az új értékkel
                    required 
                />
            </div>
            <div className="form-group">
                <label>Tábla mérete:</label>
                <input 
                    type="number" 
                    className="form-control" 
                    value={meret} 
                    onChange={(e) => setMeret(parseInt(e.target.value))} // Frissíti az állapotot az új értékkel (szám)
                    min="3" 
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Játék indítása</button>
        </form>
    );
}
