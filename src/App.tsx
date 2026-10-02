import { useState } from "react";
import { kiertekeles, type Ertek } from "./adatok";
import Jatekter from "./components/Jatekter";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [lista, setLista] = useState<Ertek[]>(Array(9).fill(""));
  const [lepes, setLepes] = useState<number>(0);

  const aktualisJatekos: Ertek = lepes % 2 === 0 ? "X" : "O";
  const gyoztes = kiertekeles(lista);
  const dontetlen = gyoztes === "" && lepes === 9;
  const vege = gyoztes !== "" || dontetlen;

  const kattintasKezelo = (index: number) => {
    if (vege || lista[index] !== "") return;

    const ujLista = [...lista];
    ujLista[index] = aktualisJatekos;
    setLista(ujLista);
    setLepes(lepes + 1);
  };

  const ujJatek = () => {
    setLista(Array(9).fill(""));
    setLepes(0);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>
        Következő játékos: <strong>{aktualisJatekos}</strong>
      </p>
      <p>Lépések száma: {lepes}</p>
      <Jatekter lista={lista} kattintas={kattintasKezelo} />

      {vege && (
        <Modal
          uzenet={dontetlen ? "Döntetlen!" : `A győztes: ${gyoztes}`}
          ujJatek={ujJatek}
        />
      )}
    </div>
  );
}

export default App;
