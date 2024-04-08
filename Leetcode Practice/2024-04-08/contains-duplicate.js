/* ~~~~~~~~QUESTION~~~~~~~~~~~
Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.

~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~

1. Declare container set
    1a. Populate it with input array
2. return container.set === nums.length

 */
var containsDuplicate = function(nums) {

    const cont = new Set(nums)
    
    return cont.size !== nums.length
};