// 8 kyu - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:
// - [1, 2, 3] --> [2, 4, 6]

function maps(x) {
    let double = [];
    return x.map(digit => digit * 2);
}

function maps(x) {
    let double = [];
    x.forEach(digit => {
      double.push(digit * 2);
    })
    return double;
}

function maps(x) {
    let double = [];
    for (let digit of x) {
      double.push(digit * 2);
    }
    return double;
}

function maps(x) {
    let double = [];
    for (let i = 0; i < x.length; i++) {
      double.push(x[i] * 2);
    }
    return double;  
}