/*
~~~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~~~

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~

1. I need to return the array, not an integer, so there's no reason to mess with joins and splits.
2. I think a decrementing for loop
    2a. Check if the last index is 9. If not, increment and return the array.
    2b. If it is 9, set to 0 and check the previous index the same way.
    2c. Do this until the loop ends, and if nothing has been incremented (or maybe check if [0] is 0 to be more elegant),
        unshift a 1 onto the front

*/

var plusOne = function(digits) {

    for(let i = digits.length-1; i >=0; i--){

        if(digits[i] !== 9){
            digits[i] = digits[i]+1
            break
        } else{
            digits[i] = 0
        }

    }

    if(digits[0] === 0){
        digits.unshift(1)
    }

    return digits
    
};