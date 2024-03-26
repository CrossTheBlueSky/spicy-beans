/*
~~~~~~~~~~~~~~~~~~~PROBLEM~~~~~~~~~~~~~~~~~
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
such that each unique element appears only once. The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order 
    they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.

~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~

    1. It has to be done in-place, so no maps.
    2. So I'll make a "checker" array that looks at the array value. If it sees the number in the checker array,
        it'll splice [i] from the original array. Otherwise it'll just add [i] to the checker array.
    3. If it does splice, the array length will reduce, so I need to decrement i when a splice happens
    4. Once the loop finishes, return the length of the array

~~~~~~~~Boundary Conditions~~~~~~~~~~~~~
    1. Array length of 1 ? return array

~~~~~~~Better Solution~~~~~~~~~~~~

    1. It's kinda cheaty cause it uses more space but make a set
    2. set array length to set length
    3. foreach off of the set that shifts the array and pushes each member of the set onto it
    4. return the length of the array
    

*/

var removeDuplicates = function(nums) {

    if(nums.length ===1){
        return 1
    }

    let ans = new Set(nums)
    nums.length = ans.size
    ans.forEach(num=>{
        nums.shift()
        nums.push(num)
    })

    return nums.length

}


// var removeDuplicates = function(nums) {

//     if(nums.length === 1){
//         return nums
//     }

//     let checker = []

//     for(let i = 0; i < nums.length; i++){
//         if(checker.includes(nums[i])){
//             nums.splice(i, 1) 
//             i--
//         }else{
//             checker.push(nums[i])
//         }
        
//     }

//     return nums.length
// };