// 8 kyu - Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
    let arr = name.toUpperCase().split(" ");
    return arr[0][0] + "." + arr[1][0];
}
  
  
function abbrevName(name){
    let fullname = name;
    let space = " ";
    let initial = "";
    
    for (let i = 0; i < fullname.length; i++) {
      if (fullname[i] == space) {
        initial = fullname[0].toUpperCase() + "." + fullname[i + 1].toUpperCase();
      }
    }
    return initial;
 }