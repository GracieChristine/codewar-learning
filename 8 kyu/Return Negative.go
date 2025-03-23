// 8 kyu - Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

package kata

func MakeNegative(x int) int {
//    output int = x
   if (x > 0) {
     return x * -1
   } else {
    return x
  }
}