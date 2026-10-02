import { useState } from "react";
import TablaMeret from "./TablaMeret";

interface ModalProps {
  uzenet: string;
  aktualisMeret: number;
  ujJatek: (meret: number) => void;
}

function Modal({ uzenet, aktualisMeret, ujJatek }: ModalProps) {
  // A kiválasztott méret csak az "Új játék" gombra nyomva lép életbe
  const [valasztottMeret, setValasztottMeret] = useState(aktualisMeret);

  return (
    <div className="modal-hatter">
      <div className="modal">
        <h2>{uzenet}</h2>
        <TablaMeret ertek={valasztottMeret} valtozas={setValasztottMeret} />
        <button onClick={() => ujJatek(valasztottMeret)}>Új játék</button>
      </div>
    </div>
  );
}

export default Modal;
