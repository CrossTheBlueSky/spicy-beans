/*~~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~~

1. For loop checks for 0's
2. On find, splices them out and pushes a 0 to the array
3. When loop has run a number of times equal to the length of the array, returns the array

*/

var moveZeroes = function(nums) {
    
    let count = 0
    
    for(let i = 0; count < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
            i--
        }
        count++
    }
    return nums
    
};