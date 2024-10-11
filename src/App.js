
import './App.css';
import Jatek from "./components/Jatek"; // Az import útvonal módosítása


export default function App() {
  return (
    <div className="App">
       <header className="App-header">
        TIC-TAC-TOE
      </header>
      <article>
        <Jatek /> {/* Itt jelenítjük meg a Jatek komponenst */}
      </article>
      <footer>Botka Bianka</footer>
    </div>
  );
}


