/*
~~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~~

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~

1. Declare an array to hold complementary values: target-an element in the given array
2. Loop through the given array
    2a. Check to see if given number is in complements array. If it is, return [nums.findIndex(e), nums.findIndex(target-e)]
    2b. If not, push target-e into the complements array and continue looping

*/

var twoSum = function(nums, target) {

    let comp = []

    for(let i = 0; i <= nums.length; i++){
        if(comp.includes(target-nums[i])){
            return [i, nums.findIndex(e=> e === target-nums[i])]
        }else{
            comp.push(nums[i])
        }
    }
    
    
    
};