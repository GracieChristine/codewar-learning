// 7 kyu - Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// - a = "xyaabbbccccdefww"
// - b = "xxxxyyyyabklmopq"
// - longest(a, b) -> "abcdefklmopqwxy"

// - a = "abcdefghijklmnopqrstuvwxyz"
// - longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

export const longest = (s1:string, s2:string): string => {
    let newStr = s1 + s2;
    let uniqueSortedChars = [...new Set(newStr.split('').sort())];
    return uniqueSortedChars.join('');
}