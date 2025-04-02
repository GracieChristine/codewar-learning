// 6 kyu - Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
    return string.split(" ")
                  .map(word => (word.length >= 5) ? word.split("").reverse().join("") : word)
                  .join(" ");
  }

function spinWords(string) {
    let arr = string.split(" ");
    let newString = [];
    for (let word of arr) {
      newString.push((word.length >= 5) ? word.split("").reverse().join("") : word)
    }
    return newString.join(" ");
}

function spinWords(string) {
    let arr = string.split(" ");
    let newString = ""
    let reversed = "";
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i].length >= 5) {
        reversed = arr[i].split("").reverse().join("");
        newString += reversed + " ";
      } else {
        newString += arr[i] + " ";
      }
    }
    return newString.trim();
  }