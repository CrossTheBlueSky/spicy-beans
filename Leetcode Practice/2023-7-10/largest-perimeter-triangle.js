/*~~~~~~~~~~Question~~~~~~~~~~
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. 
If it is impossible to form any triangle of a non-zero area, return 0.

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~
    1. MATH...kinda. So for a traingle to work, the 2 smaller sides must equal more than the larger side.
    2. So sort the array from high to low, then start looping.
        2a. If any of them return true for being valid traingles, return their perimeter. 
        2b. If none do, return 0.
    3. Boundary condition would be if there's less than 2 elements in the array.
*/

var largestPerimeter = function(nums) {

    if(nums.length < 3){
        return 0
    }

    nums.sort((a, b) =>{ return b - a})
    console.log(nums)
    for(i = 0; i < nums.length-2; i++){
        if((nums[i+1] + nums[i+2]) > nums[i])
        {
            return nums[i] + nums[i+1]+ nums[i+2]
        }
    }

    return false
    
};