# Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
# To understand how efficient the built-in Python sorting function is, you decided to implement your own simple sorting algorithm and compare its speed to the speed of the Python sorting. Write a function that, given an array of integers arr, sorts its elements in ascending order.

# Hint: with Python it's possible to swap several elements in a single line. To solve the task, use this knowledge to fill in both of the blanks (...).

# Example

# For arr = [2, 4, 1, 5], the output should be
# solution(arr) = [1, 2, 4, 5].

# Input/Output

# [execution time limit] 4 seconds (py)

# [memory limit] 1 GB

# [input] array.integer arr

# Guaranteed constraints:
# 1 ≤ arr.length ≤ 500,
# -105 ≤ arr[i] ≤ 105.

# [output] array.integer

# The given array with elements sorted in ascending order.

# [Python 2] Syntax Tips

# # Prints help message to the console
# # Returns a string
# def helloWorld(name):
#     print "This prints to the console when you Run Tests"
#     return "Hello, " + name

def solution(arr):

    n = len(arr)

    for i in range(n):
        j = 0
        stop = n - i
        while j < stop - 1:
            if arr[j] > arr[j + 1]:
                ... = ...
            j += 1
    return arr
