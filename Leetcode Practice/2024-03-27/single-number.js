/*~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.


~~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~~~~~

O(1) space and 0(n) time. Hmmm....

1. A for loop that does findIndex and findLastIndex
2. Checks of the above results are the same and returns the number if they are
3. This does work but it's suuuuuper slow. 

~~~~~~~~~~~~~~BETTER SOLUTION~~~~~~~~~~~~~~~~~~~~~

1. Others used XOR, which I'm not terribly familiar with.
2. I'll put it here so I can look back on it, but I'll leave my original solution as the main one

var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};


*/

var singleNumber = function(nums) {
    
    let out
    
    nums.forEach(num=>{
        
        if(nums.findIndex(e=> e===num) === nums.findLastIndex(e=>e===num)){
            out = num
        }
    })
    
    return out
    
};