// 8 kyu - Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce((a, b) => a + b ** 2, 0);
}

function squareSum(numbers){
    let squared = numbers.map(digit => digit ** 2);
    let sum = squared.reduce((a, b) => a + b, 0);
    return sum;
}

function squareSum(numbers){
    let squareSum = 0;
    if (numbers.length == 0) {
      return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
      squareSum += numbers[i] ** 2;
    }
    return squareSum;
}