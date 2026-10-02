export type Ertek = "X" | "O" | "";

export const tablaMeretek = [3, 4, 5, 6];

export function nyeroHossz(meret: number): number {
  return meret === 3 ? 3 : 4;
}

// Irányok: jobbra, lefelé, átlósan jobbra-le, átlósan balra-le
const iranyok = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
];

export function kiertekeles(lista: Ertek[], meret: number): Ertek {
  const hossz = nyeroHossz(meret);

  for (let sor = 0; sor < meret; sor++) {
    for (let oszlop = 0; oszlop < meret; oszlop++) {
      const jel = lista[sor * meret + oszlop];
      if (jel === "") continue;

      for (const [dSor, dOszlop] of iranyok) {
        let darab = 1;
        while (darab < hossz) {
          const s = sor + dSor * darab;
          const o = oszlop + dOszlop * darab;
          if (s < 0 || s >= meret || o < 0 || o >= meret) break;
          if (lista[s * meret + o] !== jel) break;
          darab++;
        }
        if (darab === hossz) return jel;
      }
    }
  }
  return "";
}
