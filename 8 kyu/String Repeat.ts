// 8 kyu - String repeat

// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

export function repeatStr(n: number, s: string): string {
    return s.repeat(n);
  }

export function repeatStr2(n: number, s: string): string {
    let newStr = "";
    for (let i = 0; i <= n - 1; i++) {
      newStr = newStr.concat(s);
    }
    return newStr;
  }

export function repeatStr1(n: number, s: string): string {
    let newStr = "";
    for (let i = 0; i <= n - 1; i++) {
      newStr += s;
    }
    return newStr;
  }