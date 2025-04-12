// 8 kyu - Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// - 35231 => [1,3,2,5,3]
// - 0     => [0]

export const digitize = (n: number): number[] => {
    return n.toString().split("").map(Number).reverse();
  };

export const digitize1 = (n: number): number[] => {
    let str = n.toString();
    let arr = str.split("");
    let reverse: number[] = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(Number(arr[i]));
    }
    return reverse;
};