// 7 kyu - Get the Middle Character

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// - If the string's length is odd, return the middle character.
// - If the string's length is even, return the middle 2 characters.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

export function getMiddle(s:string) {
    let midNum = Math.floor(s.length / 2);
    return s.length % 2 == 0 ? s[midNum - 1] + s[midNum] : s[midNum];
}

export function getMiddle1(s:string) {
    let midNum = Math.floor(s.length / 2);
    return s.length % 2 == 0 ? (s.slice(midNum - 1, midNum + 1)) : s[midNum];
}