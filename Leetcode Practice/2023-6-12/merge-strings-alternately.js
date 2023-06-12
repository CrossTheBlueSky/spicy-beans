/*~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~
You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

 1. Use the .split method to convert both words into arrays
 2. Declare a solution string
 3. Use a while (word1 || word2 >= i)
    3a. if word1, use the .shift method and += it to the solution
    3b. Same for word2.
4. Potentially make a little function for that and just call it twice the loop

*/

var mergeAlternately = function(word1, word2) {
    
    let arr1 = word1.split("")
    let arr2 = word2.split("")
    let sol = ""
    let i = 0

    while(i <= word1.length || i <= word2.length){
        if(arr1[0]){
            sol += arr1.shift()
        }
        if(arr2[0]){
            sol += arr2.shift()
        }
        i++
    }
    
    return sol
};