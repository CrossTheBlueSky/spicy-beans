/*~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~

1. So it's written in a needlessly complex way, but I'm understanding this to mean that "monotonic" means in increasing or decreasing order.
2. So in this case I'll just do a check for an ascending order
    2a. While nums[i] < nums[i+1] kinda thing
3. Then do another one for descending
4. If either of those checks finish with no issue return true
5. Otherwise return false
*/

var isMonotonic = function(nums) {

    if(nums.length < 2){
        return true
    }
    
    let ascendBreak = false
    let i = 0
    
    while(!ascendBreak && i < nums.length){
        if(nums[i] <= nums[i+1]){
            i++
        } else{ascendBreak = true}
    }
    
    if(i === nums.length-1){
        return true
    }
    
    let descendBreak = false
    let j = 0
    while(!descendBreak && j < nums.length){
        if(nums[j] >= nums[j+1]){
            j++
        } else{descendBreak = true}
    }
    
    if(j === nums.length-1){
        return true
    }
    
    return false
    
    
    };
