// 6 kyu - Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// - [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// - [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
    let even = integers.filter((num) => num % 2 == 0);
    let odd = integers.filter((num) => num % 2 != 0);
    
    return even.length == 1 ? even[0] : odd[0];
  }
  
  function findOutlier(integers){
    let oddNum = 0;
    let evenNum = 0;
    let oddCount = 0;
    let evenCount = 0;
    
    for (let num of integers) {
      if (num % 2 == 0) {
        evenNum = num;
        evenCount++;
      }
      if (num % 2 != 0) {
        oddNum = num;
        oddCount++;
      }
    }
    return evenCount == 1 ? evenNum : oddNum;
  }
  
  function findOutlier(integers){
    let oddNum = 0;
    let evenNum = 0;
    let oddCount = 0;
    let evenCount = 0;
    
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 == 0) {
        evenNum = integers[i];
        evenCount++;
      } else {
        oddNum = integers[i];
        oddCount++;
      }
    }
    return evenCount == 1 ? evenNum : oddNum;
  }