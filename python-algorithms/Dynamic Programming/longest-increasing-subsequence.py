#~~~~~~~~~~~~~~~~~~~~~~~~Problem~~~~~~~~~~~~~~~~~~~~~~~~~
# Given an unsorted array of integers, find the length of the longest increasing subsequence (LIS).
# An increasing subsequence is a subsequence in which all the elements are in increasing order (strictly increasing, not allowing equal elements). The subsequence does not need to be contiguous.
# For example:

# Given the array [10, 9, 2, 5, 3, 7, 101, 18]
# The longest increasing subsequence is [2, 5, 7, 101], so the length is 4.

def longest_increasing_subsequence(nums:list[int]) -> int:
    #edge handling
    if not nums:
        return 0
    
    n = len(nums)
    dp = [1] * n  # Initialize dp array with 1s. Each index will hold the highest substring possible at that index
    
    for i in range(1, n):
        for j in range(i):
            #check every element before current element. If current element is greater than any previous elements,
            #we use that element's answer to the same check +1 as our answer. Otherwise, it stays at 1
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
                
    return max(dp)
print(longest_increasing_subsequence([10, 9, 2, 5, 3, 7, 101, 18]))
