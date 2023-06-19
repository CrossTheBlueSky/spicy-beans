/* ~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~

You are keeping the scores for a baseball game with strange rules. 
At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

    An integer x.
        Record a new score of x.
    '+'.
        Record a new score that is the sum of the previous two scores.
    'D'.
        Record a new score that is the double of the previous score.
    'C'.
        Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.


~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~

1. I think I can do this in a single switch statement within a for loop
2. And then return the reduced version of the record at the end
*/

var calPoints = function(operations) {

    let output = []

    for(let i = 0; i < operations.length; i++){
        switch(operations[i]){
            case "+":
                output.push(parseInt(output[output.length-1])+parseInt(output[output.length-2]))
                break
            case "D":
                output.push(output[output.length-1]*2)
                break
            case "C":
                output.splice(output.length-1)
                break
            default:
                output.push(parseInt(operations[i]))
        }
    }


return output.reduce((acc, curr) => acc + curr, 0);

    
};