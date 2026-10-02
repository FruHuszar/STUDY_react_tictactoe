import { tablaMeretek } from "../adatok";

interface TablaMeretProps {
  ertek: number;
  valtozas: (meret: number) => void;
}

function TablaMeret({ ertek, valtozas }: TablaMeretProps) {
  return (
    <label className="tabla-meret">
      Tábla mérete:{" "}
      <select
        value={ertek}
        onChange={(e) => valtozas(Number(e.target.value))}
      >
        {tablaMeretek.map((meret) => (
          <option key={meret} value={meret}>
            {meret} × {meret}
          </option>
        ))}
      </select>
    </label>
  );
}

export default TablaMeret;
