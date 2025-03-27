// 8 kyu - Sum of Positive

// You get an array of numbers, return the sum of all of the positives ones.

export function positiveSum(arr:number[]):number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? sum += arr[i] : sum;
  }
  return sum;
}

// export function positiveSum(arr:number[]):number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// export function positiveSum(arr:number[]):number {
//   let sum = 0;
//   for(let i of arr) {
//     i > 0 ? sum += i : sum;
//   }
//   return sum;
// }

// export function positiveSum(arr:number[]):number {
//   let sum = 0;
//   for(let i of arr) {
//     if(i > 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }