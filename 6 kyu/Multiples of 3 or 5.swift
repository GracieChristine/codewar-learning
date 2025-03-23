// 6 kyu - Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

func solution(_ num: Int) -> Int {
  
  if num < 0 {
    return 0
  }

  var sum = 0

  for i in 0..<num {  
    if i.isMultiple(of: 3) || i.isMultiple(of: 5) {
      sum += i
    }
    else if i < 0 {
      sum += 0
    }
  }
  return sum
}