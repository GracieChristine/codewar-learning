// 7 kyu - Vowel Count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    
     return str.split("").filter(char => vowels.has(char)).length;
  }

function getCount(str) {
  
    let letters = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    
    for (let i = 0; i < letters.length; i++) {
      for (let y = 0; y < vowels.length; y++) {
        (letters[i] == vowels[y]) ? vowelCount += 1 : vowelCount;
      }
    }
    return vowelCount;
  }

function getCount(str) {
  
    let letters = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    
    for (let i = 0; i < letters.length; i++) {
      for (let y = 0; y < vowels.length; y++) {
        if (letters[i] == vowels[y]) {
          vowelCount += 1;
        }
      }
    }
    return vowelCount;
  }