/* Related Topics - Array, Hash Table

~~~~~~~~~SETUP~~~~~~~~~~~
Given an array of integers "nums" and an integer "target", return indices
of the two numbers such that they add up to "target"

~~~~~~LOGIC~~~~~~~


1. Filter all indices greater than the sum
2. Duplicate filtered array
3. Initialize solution array to [0, 0]
4. Set up a while loop with a condition being solution array = [0,0]
5. Second loop inside the while loop. This loop will increment the indices of the first array [i]
6. Third loop nested inside of second. This increments indices of second array [j]
    6a. Checks the values of nums[i] + dupes[j] against "target". 

*/

/* Suboptimal solution with nested loops
var twoSum = function(nums, target) {

    filtered = nums.filter(element => element <= target)
    nums.length = filtered.length
    solution = [0,0]

    while(solution == [0,0])
    {
        for(i = 0; i < filtered.length; i++)
        {
            for(j = 0; j < nums.length; j++)
            {
                if(nums[j]+filtered[i] == target)
                {
                    solution = [[i],[j]]
                }
            }
        }
    }

    return solution

    
};

*/

//Better solution with single pass hash map

function twoSum(nums, target) {
    let vals = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in vals) {
        return [vals[target-nums[i]], i];
      } else {
        vals[nums[i]] = i;
      }
    }
    return [];
  };