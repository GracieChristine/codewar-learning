// 8 kyu - Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

export function basicOp(operation: string, value1: number, value2: number): number {
    let result = 0;
      switch (operation) {
          case "+":
            result = value1 + value2;
            break;
          case "-":
            result = value1 - value2;
            break;
          case "*":
            result = value1 * value2;
            break;
          case "/":
            result = value1 / value2;
            break;
          default:
            throw new Error("Invalid operation");
      }
      return result;
  }