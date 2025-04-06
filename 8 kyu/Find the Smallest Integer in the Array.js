// 8 kyu - Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    let smallest = 0;
    let sorted = arr.sort((a, b) => a - b);
    smallest = sorted[0];
    return smallest;
 }
  
function findSmallestInt(arr) {
    return arr.sort((a, b) => a - b)[0];
}
  
function findSmallestInt(arr) {
    return Math.min(...arr);
}