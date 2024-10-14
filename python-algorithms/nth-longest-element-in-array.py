# Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.
# Note that it is the kth largest element in the sorted order, not the kth distinct element.

def findNthLargest(nums: list[int], n: int) -> int:
    nums.sort(reverse = True)
    set = nums
    return set[n-1]
    
# this is apparently the naive approach. There's a more efficient and more complicated approach that has variable complexity
# The more complicated is typically O(n) but can rarely be O(n^2)

nums1 = [3,2,1,5,6,4]
n1 = 2
nums2 = [3,2,3,1,2,4,5,5,6]
n2 = 4
print(findNthLargest(nums1, n1))
print(findNthLargest(nums2, n2))