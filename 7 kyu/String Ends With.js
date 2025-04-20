// 7 kyu - String Ends With

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// - solution('abc', 'bc') // returns true
// - solution('abc', 'd') // returns false

function solution(str, ending){
    return str.slice(str.length - ending.length) === ending;
}

function solution(str, ending){
    let sLength = str.length;
    let eLength = ending.length;
    let result = false;
    
    if (str.slice(sLength - eLength) === ending) {
      result = true;
    }
    return result;
}