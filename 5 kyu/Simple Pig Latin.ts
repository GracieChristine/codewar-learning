// 5 kyu - Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// - pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// - pigIt('Hello world !');     // elloHay orldway !

export const pigIt = (a : string) : string =>  {
    let words = a.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      if (/^[a-zA-Z]+$/.test(words[i])) {
        words[i] = words[i].slice(1) + words[i].charAt(0) + "ay";
      }
    }
  
    return words.join(" ");
  }