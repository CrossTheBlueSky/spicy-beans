/*
~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~~

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

EX:
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~~~

1. Slice a k and splice it to the front?
2. This does work, but it requires you to use a spread operator when you call slice (which is cool cause I didn't know
    you could spread inside of a splice)

~~~~~~~~~~~Boundary Conditions~~~~~~~~~~~~~~~~~~~
1. arr.length === 1 ? return arr
2. k === 0 ? return arr
3. k > arr.length - modulo of k % length




*/

var rotate = function(nums, k) {

    if(nums.length === 1 || k === 0){
        return nums
    }
    
    if(k > nums.length){
        k = k % nums.length
    }
    
    nums.splice(0, 0, ...nums.slice(nums.length-k))
    nums.length = nums.length-k
    
};