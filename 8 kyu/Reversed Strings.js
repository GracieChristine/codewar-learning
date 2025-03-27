// 8 kyu - Reversed Strings

// Complete the solution so that it reverses the string passed into it.

function solution(str){
    return str.split("").reverse().join("");
  }

function solution(str){
    let letters = str.split("");
    let reversed = "";
    for(let i = letters.length - 1; i >= 0; i--) {
      reversed += letters[i];
    }
    return reversed;
  }