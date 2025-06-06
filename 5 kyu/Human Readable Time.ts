// 5 kyu - Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// - HH = hours, padded to 2 digits, range: 00 - 99
// - MM = minutes, padded to 2 digits, range: 00 - 59
// - SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

export function humanReadable(seconds:number):string {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
  
    return `${hours}:${minutes}:${secs}`;
  }