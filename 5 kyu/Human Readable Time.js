// 5 kyu - Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// - HH = hours, padded to 2 digits, range: 00 - 99
// - MM = minutes, padded to 2 digits, range: 00 - 59
// - SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
  
    return `${hours}:${minutes}:${secs}`;
  }
  
  
  function humanReadable (seconds) {
    let finalSec = "";
    let finalMin = "";
    let finalHr = "";
  
    if (seconds === 0) {
      let finalSec = "00";
      let finalMin = "00";
      let finalHr = "00";
    } else {
      let sec = seconds % 60;
      let min = Math.floor((seconds % 3600) / 60);
      let hr = Math.floor(seconds / 3600);
      
      if (hr === 0) {
        finalHr = "00"
      } else if (hr < 10) {
        finalHr = "0" + hr;
      } else {
        finalHr = hr;
      }
      
      if (min === 0) {
        finalMin = "00"
      } else if (min < 10) {
        finalMin = "0" + min;
      } else {
        finalMin = min;
      }
      
      if (sec === 0) {
        finalSec = "00"
      } else if (sec < 10) {
        finalSec = "0" + sec;
      } else {
        finalSec = sec;
      }
    }
    return `${finalHr} : ${finalMin} : ${finalSec}`;
  }