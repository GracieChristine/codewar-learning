// 7 kyu - Vowel Count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

export class Kata {
    static getCount(str: string): number {
      
      let vowels = new Set(["a", "e", "i", "o", "u"]);
      
      return str.split("").filter(letter => vowels.has(letter)).length;
    }
  }

// export class Kata {
//     static getCount(str: string): number {
//       let char = str.split("");
//       let vowels = ["a", "e", "i", "o", "u"];
//       let vowelCount = 0;
      
//       for(let i = 0; i < char.length; i++) {
//         for(let y = 0; y < vowels.length; y++) {
//           (char[i] == vowels[y]) ? vowelCount += 1 : vowelCount;
//         }
//       }
//       return vowelCount;
//     }
//   }