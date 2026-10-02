import { useState } from "react";
import { kiertekeles, type Ertek } from "./adatok";
import Jatekter from "./components/Jatekter";
import Modal from "./components/Modal";
import "./App.css";

const uresTabla = (meret: number): Ertek[] => Array(meret * meret).fill("");

function App() {
  const [tablaMeret, setTablaMeret] = useState<number>(3);
  const [lista, setLista] = useState<Ertek[]>(uresTabla(3));
  const [lepes, setLepes] = useState<number>(0);

  const aktualisJatekos: Ertek = lepes % 2 === 0 ? "X" : "O";
  const gyoztes = kiertekeles(lista, tablaMeret);
  const dontetlen = gyoztes === "" && lepes === tablaMeret * tablaMeret;
  const vege = gyoztes !== "" || dontetlen;

  const kattintasKezelo = (index: number) => {
    if (vege || lista[index] !== "") return;

    const ujLista = [...lista];
    ujLista[index] = aktualisJatekos;
    setLista(ujLista);
    setLepes(lepes + 1);
  };

  const ujJatek = (ujMeret: number) => {
    setTablaMeret(ujMeret);
    setLista(uresTabla(ujMeret));
    setLepes(0);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>
        Következő játékos: <strong>{aktualisJatekos}</strong>
      </p>
      <p>Lépések száma: {lepes}</p>
      <Jatekter lista={lista} meret={tablaMeret} kattintas={kattintasKezelo} />

      {vege && (
        <Modal
          uzenet={dontetlen ? "Döntetlen!" : `A győztes: ${gyoztes}`}
          aktualisMeret={tablaMeret}
          ujJatek={ujJatek}
        />
      )}
    </div>
  );
}

export default App;
