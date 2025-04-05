// 7 kyu - Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

export function descendingOrder(n: number): number {
    return Number((n.toString().split("").sort((a, b) => Number(b) - Number(a))).join(""));
  }

export function descendingOrder2(n: number): number {
    let descendinglyArr: string[] = n.toString().split("").sort((a, b) => Number(b) - Number(a));
    let descending: number = Number(descendinglyArr.join(""));
    return descending;
  }

export function descendingOrder1(n: number): number {
    const strArr: string[] = n.toString().split("");
    const descendinglyArr: string[] = strArr.sort((a, b) => Number(b) - Number(a));
    const descending: number = Number(descendinglyArr.join(""));
    return descending;
  }