// 8 kyu - Reversed Strings

// Complete the solution so that it reverses the string passed into it.

export function solution(str: string): string {
    return str.split("").reverse().join("");
  }

// export function solution(str: string): string {
//     let char = str.split("");
//     let reversed = "";
//     for(let i = char.length - 1; i >= 0; i--) {
//       reversed += char[i];
//     }
//     return reversed;
//   }