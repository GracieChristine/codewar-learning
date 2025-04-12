// 7 kyu - Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// - XO("ooxx") => true
// - XO("xooxx") => false
// - XO("ooxXm") => true
// - XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// - XO("zzoo") => false

function XO(str) {
    let xCounter = 0;
    let oCounter = 0;
    let text = str.toLowerCase();
    
    for (let char of text) {
      if (char == "x") {
        xCounter++;
      }
      if (char == "o") {
        oCounter++;
      }
    }
    return xCounter == oCounter;
}

function XO(str) {
    let xCounter = 0;
    let oCounter = 0;
    let equal = true;;
    let arr = str.toLowerCase().split("");
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "x") {
        xCounter++;
      } else if (arr[i] == "o") {
        oCounter++;
      }
      (xCounter == oCounter) ? equal = true : equal = false;
    }
    return equal;
}

function XO(str) {
    let xCounter = 0;
    let oCounter = 0;
    let equal = true;;
    let arr = str.toLowerCase().split("");
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "x") {
        xCounter++;
        
        (xCounter == oCounter) ? equal = true : equal = false;
        
      } else if (arr[i] == "o") {
        oCounter++;
        (xCounter == oCounter) ? equal = true : equal = false;
      }
    }
    return equal;
}