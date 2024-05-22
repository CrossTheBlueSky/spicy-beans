/*

~~~~~~~~~QUESTION~~~~~~~~~~~~~

    You are given an integer array coins representing coins of different 
    denominations and an integer amount representing a total amount of money. 
    Return the fewest number of coins that you need to make up that amount. 
    If that amount of money cannot be made up by any combination of the coins, 
    return -1.

    You may assume that you have an infinite number of each kind of coin.
    Example: Input: coins = [1, 2, 5], amount = 11, Output: 3 (5 + 5 + 1)

~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~

    1. If the coins array is always in increasing order, I'll start by reversing it
    2. Then I'll do a for loop that divides the total by the value of each index in order.
        2a. I'll have a counter that will be increased by the result of the division
        2b. I'll also set a new total equal to the remainder for use in later loops.

*/



function coinChange(coins, amount) {

    let current = amount
    let reverse = coins.reverse()
    let out = 0

    for(let i = 0; i < reverse.length; i++){
        if(reverse[i] <= current){
        out = out + Math.trunc(current/reverse[i])
        current = current % reverse[i]
        }
    }

    
    
    return current === 0 ? out : -1



}

module.exports = coinChange