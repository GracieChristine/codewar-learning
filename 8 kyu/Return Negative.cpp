// 8 kyu - Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

int makeNegative(int num)
{
  return num <= 0 ? num : num * -1;
}