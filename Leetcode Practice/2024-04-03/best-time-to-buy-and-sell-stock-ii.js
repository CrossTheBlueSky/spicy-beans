/*~~~~~~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~~~~


You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
 However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

EXAMPLE
    Input: prices = [7,1,5,3,6,4]
    Output: 7
    Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
    Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
    Total profit is 4 + 3 = 7.


~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~

    1. Declare output
    2. Looks like a pretty simple loop
        2a. (if i !== 0) if prices[i] > prices[i-1], sell and add profit to output
        2b. if prices[i] < prices[i+1], buy and remove profit from output
    3. return output when loop terminates

*/

var maxProfit = function(prices) {

    let out = 0
    let holding = false
    for(let i=0; i < prices.length; i++){

        if(holding){

            if(prices[i] > prices[i-1]){
                out = out+prices[i]
                holding = false
            }

        }
        if(!holding){
            if(prices[i]< prices[i+1]){
                
                out = out-prices[i]
                
                holding = true
            }
        }

        
    }

    return out
    
};