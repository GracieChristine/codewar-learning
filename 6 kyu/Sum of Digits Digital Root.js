// 6 kyu - Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
// -     16  -->  1 + 6 = 7
// -    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// - 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// - 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    while (n >= 10) {
      n = n
        .toString()
        .split("")
        .reduce((sum, digit) => sum + +digit, 0);
    }
    return n;
}

function digitalRoot(n) {
    let numArr = n.toString().split("").map(Number);
    
    while (numArr.length > 1) {
      let sum = numArr.reduce((a, b) => a + b, 0)
      numArr = sum.toString().split("").map(Number);
    }
    return numArr[0];
}
  

function digitalRoot(n) {
    let numArr = n.toString().split("").map(Number);
    
    while (numArr.length > 1) {
      let sum = 0;
      for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
      }
      numArr = sum.toString().split("").map(Number);
    }
    return numArr[0];
}
  