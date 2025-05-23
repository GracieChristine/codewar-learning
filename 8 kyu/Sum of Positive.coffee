# 8 kyu - Sum of Positive

# You get an array of numbers, return the sum of all of the positives ones.

# positiveSum = (arr) ->
#   sum = 0
#   for num in arr
#     if num > 0
#       sum += num
#     else
#       sum += 0  
#   sum

positiveSum = (arr) ->
  sum = 0
  for i in arr when i > 0
    sum += i
  sum

# positiveSum = (arr) ->
#   sum = 0
#   for i in arr
#     sum += i if i > 0
#   return sum

# positiveSum = (arr) ->
#   sum = 0
#   for num in arr
#     if num > 0 then sum += num
#   sum