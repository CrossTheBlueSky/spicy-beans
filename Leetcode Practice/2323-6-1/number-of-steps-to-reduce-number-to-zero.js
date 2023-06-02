/* ~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, 
otherwise, you have to subtract 1 from it.



~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

1. This seems easy. Just do a loop that does the two reducing options based on a conditional
    1a. If num % === 0, divide by two, if not subtract 1
    1b. Increment the count variable by one every time the loop runs
2. Close the loop when num === 0, and return count.
3. There might be some weird nasty pervert way to do this real fancy, but I don't know it


*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    
let count = 0
while(num){
    if(num % 2 === 0 ){
        num = num/2
        count++
    } else{
        num--
        count++
    }
}

return count

};