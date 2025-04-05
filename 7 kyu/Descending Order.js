// 7 kyu - Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    return Number(n.toString().split("").sort((a, b) => b - a).join(""));
  }

function descendingOrder(n){
    let str = n.toString()
                .split("")
                .sort((a, b) => b - a)
                .join("");
    let descending = Number(str);
    
    return descending;
}

function descendingOrder(n){
    let str = n.toString();
    let strArr = str.split("").sort((a, b) => b - a).join("");
    let descending = Number(strArr);
    
    return descending;
}