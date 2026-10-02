export type Ertek = "X" | "O" | "";

const nyeroKombinaciok = [
  [0, 1, 2], // sor
  [3, 4, 5], // sor
  [6, 7, 8], // sor
  [0, 3, 6], // oszlop
  [1, 4, 7], // oszlop
  [2, 5, 8], // oszlop
  [0, 4, 8], // átló
  [2, 4, 6], // átló
];

export function kiertekeles(lista: Ertek[]): Ertek {
  for (const [a, b, c] of nyeroKombinaciok) {
    if (lista[a] !== "" && lista[a] === lista[b] && lista[a] === lista[c]) {
      return lista[a];
    }
  }
  return "";
}
