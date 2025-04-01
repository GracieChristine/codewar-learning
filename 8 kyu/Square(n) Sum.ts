// 8 kyu - Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

export function squareSum(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b ** 2, 0);
  }

// export function squareSum(numbers: number[]): number {
//     let squareTotal = 0;
//     for (let i = 0; i <= numbers.length - 1; i++) {
//       squareTotal += numbers[i] ** 2;
//     }
//     return squareTotal;
//   }