// 6 kyu - Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// - createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0, 3).join("");
    let midPart = numbers.slice(3, 6).join("");
    let lastPart = numbers.slice(6, 10).join("");
    
    return `(${areaCode}) ${midPart}-${lastPart}`;
}

function createPhoneNumber(numbers){
    let phone = "";
    let symbolArr = ["(",")"," ","-"];
   numbers.forEach((digit, index) => {
     if (index == 0) {
        phone += symbolArr[0] + digit;
      } else if (index == 3) {
        phone += symbolArr[1] + symbolArr[2] + digit;
      } else if (index == 6) {
        phone += symbolArr[3] + digit;
      } else {
        phone += digit;
      }
   });
    return phone;
  }