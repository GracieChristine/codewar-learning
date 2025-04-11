// 7 kyu - Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// - "Dermatoglyphics" --> true
// - "aba" --> false
// - "moOse" --> false (ignore letter case)

function isIsogram(str){
    let lower = str.toLowerCase();
    let arr = lower.split("");
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          return false;
          break;
        }
      }
    }
    return true;
}