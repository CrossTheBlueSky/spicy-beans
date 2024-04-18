/*~~~~~~~~~~QUESTION~~~~~~~~

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~

1. Sort the array by string length.
2. Set up a loop
    2a. Takes a slice of the shortest string
    2b. Compares it to a slice of the same size in the other two strings
    2c. If it fails returns a slice that's one element shorter than the current loop
3. If the loop completes return the arr[0]

~~~~~~~~~~~FOLLOWUP~~~~~~~~~~~~~~~

IF YOU USE THE DEFAULT SORT IT SORTS ALPHABETICALLY WHICH MEANS THAT YOU CAN JUST CHECK THE FIRST INDEX 
AGAINST THE LAST ONE AHHHHHHHHHHHH

*/

var longestCommonPrefix = function(strs) {
    
    strs.sort()
    
    for(let i = 0; i < strs[0].length; i++){
        if(strs[0][i] !== strs[strs.length-1][i]){
            return strs[0].slice(0, i)
        }
    }
    
    return strs[0]
};