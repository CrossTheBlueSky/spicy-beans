/*~~~~~~~~~~Question~~~~~~~~~~~~
    Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

~~~~~~~~~Logical Breakdown~~~~~~~~

    1. Aside from just doing .reverse(), I assume. Cause that works instantly and scores top marks when submitted
    2. Probably just a single for loop that runs for half the length of the array
        2a. Slice and store s[i] and s[s.length-i-1]
        2b. set those indexes to the opposite stored values
    3. Maybe put a conditional in there if i and length-i-1 are the same index to break the loop for odd length arrays

*/

var reverseString = function(s) {
    
    // the right answer is just
    //return s.reverse()

    for(let i = 0; i < s.length/2; i++){

        if(i !== s.length-(i-1)){
            const val1 = s[i]
            const val2 = s[s.length-(i+1)]
            s[i] = val2
            s[s.length-(i+1)] = val1
        }
    }


    
};