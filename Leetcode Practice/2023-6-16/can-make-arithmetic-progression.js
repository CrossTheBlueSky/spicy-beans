/*~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~
A sequence of numbers is called an arithmetic progression if the 
difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be 
rearranged to form an arithmetic progression. Otherwise, return false.

~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~
1. Sort the array, increasing or decreasing doesn't matter.
2. If arr[0]-arr[1] === arr[1] - arr[2], return true. Otherwise return false.
3. Edge case if there's only 2 values, return true

~~~~~~~~~~~~~~Thoughts~~~~~~~~~~~~~~~~~~~~~~
This is actually pretty slow (24%), so I'm gonna look at some other solutions


*/

// var canMakeArithmeticProgression = function(arr) {
    
//     if(arr.length === 2){
//     return true
// }

// arr.sort((a, b)=>{return a-b})
// console.log(arr)

// for(let i = 0; i < arr.length -2; i++){
//     if(Math.abs(arr[0]-arr[1]) !== Math.abs(arr[i+1] - arr[i+2])){
//         return false
// }
// }
// return true
// };

/*~~~~~~~~~~~~~~ O(n) Solution Breakdown~~~~~~~~~~~~~~~~

*/

var canMakeArithmeticProgression = function(arr) {
    const max = Math.max(...arr); // Gets the largest number in the array
    let current = Math.min(...arr); //Gets the smallest number in the array
    const gap = (max - current) / (arr.length - 1); //This is where it gets interesting.
    //Take the difference between the max and min, and divide it by the length of the array-1
    //This should give you the absolute difference that should be the "gap" between each step

    
    if(max === current || arr.length === 2){ //Accounts for edge cases where there is an array of one repeating integer
                                            //or where there are only two elements. Checking at the beginning can speed
                                            //things up by preventing unecessary calculations in these cases 
        return true
    }

    const set = new Set(arr); //This makes a set out of the array, thus removing any duplicates.
    //Wouldn't removing duplicates return "true" outputs in cases where it isn't true?
    //Apparently the test cases on Leetcode aren't up to snuff here. For my own knowledge,
    //I'll account for this here. I'll add a check to make sure that set and arr have the same length, and if they don't,
    //return false
    
    if(set.size != arr.length){ //This will make sure that if any duplicates are eliminated, the function returns false properly
        return false
    }

    //This section is pretty intuitive. It just iterates through the array from the lowest value 
    //to the highest by the absolute difference calculated above. If that value doesn't appear in the set, it returns false.
    //Otherwise it runs through the entire array.
    while (current < max) {
        current += gap; 
        if (!set.has(current)) return false;
    }
    return true;
};