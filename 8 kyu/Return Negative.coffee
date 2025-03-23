# 8 kyu - Return Negative

# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

makeNegative = (num) ->
  if num <= 0 then num else num * -1