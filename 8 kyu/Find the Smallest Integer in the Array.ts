// 8 kyu - Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

export function findSmallestInt(args: number[]): number {
    return Math.min(...args);
}

export function findSmallestInt1(args: number[]): number {
    return args.sort((a, b) => a - b)[0];
}
