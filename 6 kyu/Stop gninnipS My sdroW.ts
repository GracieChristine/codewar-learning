// 6 kyu - Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

export function spinWords(words: string): string {
    let ogArr = words.split(" ");
    let newArr: string[] = [];
  
    for (let word of ogArr) {
      newArr.push((word.length >= 5) ? word.split("").reverse().join("") : word);
    }
  return newArr.join(" ");
}