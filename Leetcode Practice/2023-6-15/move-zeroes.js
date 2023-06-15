/* ~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

1.Make an empty array to hold the 0's
2. Loop through the inital array and pop any found 0's onto the new array
3. Concatenate the new array onto the old array

THIS IS INCREDIBLY SLOW, LET'S TRY AGAIN

~~~~~~~~~~~~~~~~~Second Attempt~~~~~~~~~~~~~~~~~~

1. Loop through the array a number of times equal to its length, but use a separate counter variable so I don't interact with any indexes more than once.
    1a. If I hit a 0, splice to delete and splice to place it on the end of the array
2. Once the loop has run, return nums

still not super fast, but significantly faster than the previous implementation
*/

var moveZeroes = function(nums) {
  
    let count = 0
    let i = 0
   while(i + count < nums.length){
       if(nums[count] === 0){
           nums.splice(count, 1)
           nums.splice(nums.length, 0, 0)
           
       } else{
           count++
       }
       i++
   }
   
   return nums
    
   

};