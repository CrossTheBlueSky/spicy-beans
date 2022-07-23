/* Related Topics - Array, Math, Greed, Sorting

~~~~~~~~~~SETUP~~~~~~~~~~~~~
Given an integer array "nums", return the largest perimeter of a triangle with a non-zero area,
formed from three of these lengths. If it is impossible for form any triangle of a non-zero area, return 0.

~~~~~~~Logic~~~~~~~~~
1. Sort the array from largest to smallest
2. Initialize a variable to hold the final answer, set it to 0 by default
3. Start a while loop to make sure that we check through the array, but stop if perimeter ever has a value other
    than 0, or we reach the end of the array.
    3a. Do a check to see if index i+1 and i+2  are greater than index i.
4. If true, return the sum of [0],[1], and [2]. if false, increment i and continue looping.
5. When the while loop terminates, return the value of perimeter (which should be 0 if we hit the end of the array,
    and [i]+[i+1]+[i+2] if we hit a valid perimeter)

*/

var largestPerimeter = function(nums) {
    
    nums.sort((a,b) => b-a)
    perimeter = 0;

    if(nums[1]+nums[2] > nums[0]){
        perimeter = nums[0] + nums[1] + nums[2]
    }

    return perimeter
    
};