import type { CSSProperties } from "react";
import type { Ertek } from "../adatok";
import Mezo from "./Mezo";

interface JatekterProps {
  lista: Ertek[];
  meret: number;
  kattintas: (index: number) => void;
}

function Jatekter({ lista, meret, kattintas }: JatekterProps) {
  const stilus = { "--tabla-meret": meret } as CSSProperties;

  return (
    <div className="jatekter" style={stilus}>
      {lista.map((ertek, index) => (
        <Mezo key={index} ertek={ertek} kattintas={() => kattintas(index)} />
      ))}
    </div>
  );
}

export default Jatekter;
