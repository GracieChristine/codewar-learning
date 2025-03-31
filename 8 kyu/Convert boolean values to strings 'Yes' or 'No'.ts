// 8 kyu - Convert boolean values to strings 'Yes' or 'No'

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

export const boolToWord = (bool: boolean): string => {
    return (bool) ? "Yes" : "No";
  };

// export const boolToWord = (bool: boolean): string => {
//     return (bool !== true) ? "No" : "Yes";
//   };

// export const boolToWord = (bool: boolean): string => {
//     let word = "";
//     if (bool == true) {
//       word = "Yes";
//     } else {
//       word = "No";
//     }
//     return word;
//   };