// 7 kyu - Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  
    return str.replace(/[aeiouAEIOU]/g, "");
  }

function disemvowel(str) {
  
    return str.split("").filter(letter => !'aeiouAEIOU'.includes(letter)).join("");
  }

function disemvowel(str) {
  
    let letters = str.split("");
    let disemvoweled = "";
    
    for(let i = 0; i < letters.length; i++) {
      if (!'aeiouAEIOU'.includes(letters[i])) {
        disemvoweled += letters[i];
      }
    }
    return disemvoweled;
  }