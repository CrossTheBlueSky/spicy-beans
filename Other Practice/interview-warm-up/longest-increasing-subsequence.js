/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from an array by deleting some or no elements 
without changing the order of the remaining elements.

Example: Input: [10,9,2,5,3,7,101,18], Output: 4 (The longest increasing subsequence is [2,5,7,101])


~~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~

    1. Maybe I can just run a loop that checks each index against the one on its right
        1a. If it's greater, delete it
    2. Then return the length of the array after that logic runs

~~~~~~~~~~~~~~~~~~NOTES~~~~~~~~~~~~~~~~~~~~~~~

My first attempt with the above logic didn't work for every test case. It turns out the proper approach to this is dynamic
programming, which I've alway struggled with. I'll try to explain the logic here and maybe it'll stick this time

1. Check if nums is empty. If it is, return 0.
2. Create a new array with the same length as nums to store the lengths of the longest subsequences ending at each index. 
    So, in an array of [1,2,2,3,4] the subs array would look like [1,2,1,2,3] when the logic ends
3. Fill subs with 1s since every element would at minimum be a subsequence including itself
4. Loop through nums starting from index 1. Since [0] is the end of its own subsequence, we skip it
5. Nest another loop that checks every element from nums[0] to nums[i-1].
    5a. If nums[i] > nums[j] increase the value at subs[i] to represent the longer substring
    5b. This will be done with  Math.max(subs[i], subs[j]+1)
        -this loop runs multiple times for each i value, so confirming at every step that the maximum substring
            from this loop is larger than the one already stored here is important
6. Once the loops finish, we can return the highest value contained in the subs array.
    Math.max(...subs) will work fine here, but remember to use the spread operator or it will break


*/

function longestIncreasingSubsequence(nums){

    if(nums.length < 1){
        return 0
    }
    
    let subs = new Array(nums.length)
    subs.fill(1)

    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                subs[i] = Math.max(subs[i], subs[j]+1)
            }
        }
    }

    return Math.max(...subs)

}

module.exports = longestIncreasingSubsequence