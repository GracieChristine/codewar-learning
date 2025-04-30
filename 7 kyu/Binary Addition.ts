// 7 kyu - Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))
// - 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// - 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

export function addBinary(a:number,b:number):string {
    let sum = a + b;
  
    if (sum < 0) {
      return "-" + Math.abs(sum).toString(2);
    }
  
    return sum.toString(2);
  }