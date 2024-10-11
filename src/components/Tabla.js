import React from "react";
import Cella from "./Cella";

export default function Tabla() {

    const renderCella = (index) => (

        //a map a td elemet hozza létre, ezért ide rendeljük a key-t
        
            <Cella
            key={index} style={{ padding: '0' }}
                value={null} //beállítja nullra a cella értékét
                onClick={() => { }}  //itt lesz a cella eseménykezelője elkapva
            />
        
        
    );

    const renderSor = (sorIndex) => (
//3 td elem létrehozása egy sorban, bennük 1-1- cellával.Az egyes sorok celláinak indexei
//a sorIndex+i re miért ad hibát? Hogy két gyerekelemnek ugyanaz lehet a key? Nem vagyok matekzseni.....
       <tr key={sorIndex}>
            {[0, 1, 2].map(i =>
                renderCella(sorIndex*3 + i)
            )}
        </tr>

    );



return (
//sorok kezdő indexeivel
//style attribútum JS objektumot vár első { jelzi JS kódot írunk, a második magát az objektumot jelöli
    <table style={{ borderCollapse: 'collapse', borderSpacing: '0'}}>
        <tbody>
            {[0, 3, 6].map(i => renderSor(i))} 
        </tbody>

    </table>

);
}
