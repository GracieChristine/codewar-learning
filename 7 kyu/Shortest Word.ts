// 7 kyu - Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number {
    let length = 0;
    let arr = s.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
      if (length == 0) {
        length = arr[i].length;
      } else if (length != 0 && arr[i].length < length) {
        length = arr[i].length;
      }
    }
    return length;
  }