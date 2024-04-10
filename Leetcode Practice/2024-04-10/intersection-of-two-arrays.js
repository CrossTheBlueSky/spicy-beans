/*~~~~~~~QUESTION~~~~~~~~~~~~~~~

Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.


~~~~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~~

1. Determine which array is shorter
2. Remove all elements of shorter array from longer array
3. Return unmutated longer array - mutated longer array

*/

var intersect = function(nums1, nums2) {

    let long
  
    if(nums1.length > nums2.length){
        long = nums1
        short = nums2
    }else{
        long = nums2
        short = nums1
    }

    const mutate = long.filter((e)=>{
        if(short.includes(e)){
            short.splice(short.indexOf(e), 1)
        }else{
            return true
        }
    })
    console.log(mutate)

    return long.filter((e)=>{
        if(mutate.includes(e)){
            mutate.splice(mutate.indexOf(e),1)
        }else{
            return true
        }
    })

};