/*~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~
You are given an m x n integer grid accounts where accounts[i][j] is the 
amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.

~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~

1. So in this case, we're totalling all the values in the i row, since they are all from the same customer
2. Declare a var for the output, starting it at 0.
3. So we'll do a loop through all of the i rows
    3a. The loop will reduce each array into a value
    3b. Then it will compare itself to output. If it's higher, output will be set to its value
4. When the loop terminates, we return output.

*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    let output = 0
    for(i = 0; i < accounts.length; i++){
       let wealth = accounts[i].reduce((sum, current) => sum + current, 0)
        if(output < wealth){
            output = wealth
        }
    }

    return output
    
};