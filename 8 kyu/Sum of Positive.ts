// 8 kyu - Sum of Positive

// You get an array of numbers, return the sum of all of the positives ones.

export function positiveSum(arr:number[]):number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] < 0 ? sum : sum += arr[i];
    }
    return sum;
}