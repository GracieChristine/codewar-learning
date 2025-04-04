// 8 kyu - Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
    return str.slice(1, -1);
  }

function removeChar(str){
    return str.slice(1,str.length - 1);
};

function removeChar(str){
    return str.substr(1,str.length - 2);
};

function removeChar(str){  
    let newStr = str.split("");
    newStr.pop();
    newStr.shift();
    
    return newStr.join("");
  };

function removeChar(str){
    let strArr = str.split("");
    let newStr = "";
    
    for (let i = 0; i < str.length; i++) {
      if (i > 0 && i < str.length - 1) {
        newStr += str[i];
      }
    }
    return newStr;
};