import type { Ertek } from "../adatok";
import Mezo from "./Mezo";

interface JatekterProps {
  lista: Ertek[];
  kattintas: (index: number) => void;
}

function Jatekter({ lista, kattintas }: JatekterProps) {
  return (
    <div className="jatekter">
      {lista.map((ertek, index) => (
        <Mezo key={index} ertek={ertek} kattintas={() => kattintas(index)} />
      ))}
    </div>
  );
}

export default Jatekter;
