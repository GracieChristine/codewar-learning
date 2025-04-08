// 7 kyu - Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// - accum("abcd") -> "A-Bb-Ccc-Dddd"
// - accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// - accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s.split("")
      .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
      .join("-");
}

function accum(s) {
    let arr = s.split("");
    let newArr = [];
    let repeatChar, upperChar = "";
    for (let i = 0; i < arr.length; i++) {
      repeatChar = arr[i].toLowerCase().repeat(i + 1);
      upperChar = repeatChar.charAt(0).toUpperCase() + repeatChar.slice(1);
      newArr.push(upperChar);
    }
    return newArr.join("-");
}