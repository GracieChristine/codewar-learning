// 6 kyu - Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

export function countBits(n: number): number {
    let binary = n.toString(2);
    let arr = binary.split("");
    let filterArr = arr.filter((el) => el ==="1");
    return filterArr.length;
  }