// 8 kyu - Sum of Positive

// You get an array of numbers, return the sum of all of the positives ones.

package kata

func PositiveSum(numbers []int) int {
  sum := 0;
  for i := 0; i < len(numbers); i++ {
    if (numbers[i] > 0) {
     sum += numbers [i];
    }
  }
  return sum;
}
