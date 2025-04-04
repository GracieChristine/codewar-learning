// 8 kyu - String repeat

// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    return s.repeat(n);
}

function repeatStr (n, s) {
    let newStr = "";
    for (let i = 0; i < n; i++) {
      newStr += s;
    }
    return newStr;
}