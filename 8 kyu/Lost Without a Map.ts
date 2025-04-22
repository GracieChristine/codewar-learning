// 8 kyu - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:
// - [1, 2, 3] --> [2, 4, 6]

export function maps(x: number[]): number[]{
    let double: number[] = [];
    
    x.forEach(num => {
      double.push(num * 2);
    })
    return double;
}