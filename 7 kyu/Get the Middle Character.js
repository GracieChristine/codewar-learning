// 7 kyu - Get the Middle Character

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// - If the string's length is odd, return the middle character.
// - If the string's length is even, return the middle 2 characters.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    let length = s.length;
    let midNum = Math.floor(length / 2);
    let midChar = "";
    
    if (length % 2 == 0) {
      midChar = s.slice(midNum - 1, midNum + 1);
    } else {
      midChar = s[midNum];
    }
    return midChar;
  }

function getMiddle(s) {
    let length = s.length;
    let midNum = Math.floor(length / 2);
    let midChar = "";
    
    if (length % 2 != 0) {
      midChar = (length == 1) ? s[0] : s[midNum];
    } else {
      midChar = s[midNum - 1] + s[midNum];
    }
    return midChar;
}