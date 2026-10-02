import type { Ertek } from "./adatok";

interface MezoProps {
  ertek: Ertek;
  kattintas: () => void;
}

function Mezo({ ertek, kattintas }: MezoProps) {
  return (
    <button className="mezo" onClick={kattintas}>
      {ertek}
    </button>
  );
}

export default Mezo;
