// 8 kyu - Sum of Positive

// You get an array of numbers, return the sum of all of the positives ones.

#include <vector>

int positive_sum (const std::vector<int> arr){
  int sum = 0;
  for (int i = 0; i < arr.size(); i++) {
    (arr[i] > 0) ? sum += arr[i] : sum;
  }
  return sum;
}