// 7 kyu - Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)
// - "ATTGC" --> "TAACG"
// - "GTAT" --> "CATA"

export class Kata {
    static dnaStrand(dna: string) {
      let complement = "";
      for (let letter of dna) {
        if (letter == "A") {
          complement += "T";
        } else if (letter == "T") {
          complement += "A";
        } else if (letter == "C") {
          complement += "G";
        } else if (letter == "G") {
          complement += "C";
        }
      }
      return complement;
    }
  }