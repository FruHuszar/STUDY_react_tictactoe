interface ModalProps {
  uzenet: string;
  ujJatek: () => void;
}

function Modal({ uzenet, ujJatek }: ModalProps) {
  return (
    <div className="modal-hatter">
      <div className="modal">
        <h2>{uzenet}</h2>
        <button onClick={ujJatek}>Új játék</button>
      </div>
    </div>
  );
}

export default Modal;
