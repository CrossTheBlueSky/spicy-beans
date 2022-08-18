/* Related Topics - Array, Sorting

~~~~SETUP~~~~
A sequence of numbers is called an arithmetic progression if the difference between any 
two consecutive elements is the same

Given an array of numbers arr, return true if the array can be arranged to form an arithmetic progression.
Otherwise, return false.

~~~~~~LOGIC~~~~~~~~

1. Sort the Array from small to big or big to small, doesn't matter which
2. While loop through the array (condition being a bool being in one position and a limiter on the value of i)
    2a. Loop should check if [i] - [i+1] === [i+1]-[i+2]
    2b. Loop should also end before i+2 goes past the length of the array
    2c. Flip a bool if any of these return false
    2d. I can probably use one Bool here and use that as my return later
3. Return the value of the bool.

*/

var canMakeArithmeticProgression = function(arr) {
    
    let isViable = true
    let i = 0;
    arr.sort((a,b) => a - b)
    
    while(isViable === true && i != arr.length-2)
    {

        
        if( (arr[i] - arr[i+1]) === (arr[i+1] - arr[i+2]) )
        {
           i++
        }

        else
        {

            isViable = false
        }
    }

    return isViable
};