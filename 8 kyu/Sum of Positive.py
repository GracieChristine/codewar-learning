# 8 kyu - Sum of Positive

# You get an array of numbers, return the sum of all of the positives ones.

def positive_sum(arr):
    sum = 0;
    for num in arr:
        if num > 0:
            sum += num
            
    return sum