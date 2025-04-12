// 8 kyu - Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// - 35231 => [1,3,2,5,3]
// - 0     => [0]

function digitize(n) {
    return n.toString()
            .split("")
            .map(Number)
            .reverse();
}

function digitize(n) {
    return n.toString().split("").map(Number).reverse();
}

function digitize(n) {
    let reverse = n.toString().split("").map(Number).reverse();
    return reverse;
}

function digitize(n) {
    let str = n.toString();
    let reverse = str.split("").map(Number).reverse();
    return reverse;
}

function digitize(n) {
    let str = n.toString();
    let arr = str.split("").map(Number);
    let reverse = arr.reverse();
    return reverse;
}

function digitize(n) {
    let str = n.toString();
    let arr = str.split("");
    arr = arr.map(Number);
    let reverse = arr.reverse();
    return reverse;
}

function digitize(n) {
    let str = n.toString();
    let arr = str.split("");
    let reverse = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(Number(arr[i]));
    }
    return reverse;
}