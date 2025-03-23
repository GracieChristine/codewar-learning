// 8 kyu - Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

func returnNegative(_ number:Int) -> Int {
    return number <= 0 ? number : number * -1;
}