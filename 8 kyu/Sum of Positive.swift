// 8 kyu - Sum of Positive

// You get an array of numbers, return the sum of all of the positives ones.

func sumOfPositives (_ numbers: [Int]) -> Int {
    var sum = 0

    for i in 0..<numbers.count {
        if numbers[i] > 0 {
            sum += numbers[i]
        }
    }
    return sum
}