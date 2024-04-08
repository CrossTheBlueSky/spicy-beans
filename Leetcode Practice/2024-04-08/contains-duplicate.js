/* ~~~~~~~~QUESTION~~~~~~~~~~~
Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.

~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~

1. Declare container set
    1a. Populate it with input array
2. return container.length === nums.length

 */
var containsDuplicate = function(nums) {

    const arr = new Set(nums)
    console.log(arr)
    
    return arr.size !== nums.length
};