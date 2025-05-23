// 7 kyu - Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
    let sortedArr = numbers.split(" ").map(Number);
    
    return `${Math.max(...sortedArr)} ${Math.min(...sortedArr)}`;
}

function highAndLow(numbers){
    let sortedArr = numbers.split(" ").map(int => Number(int)).sort((a, b) => a - b);
    
    let highest = sortedArr[sortedArr.length - 1];
    let lowest = sortedArr[0];
    
    let sentence = highest + " " + lowest;
    return sentence;
}