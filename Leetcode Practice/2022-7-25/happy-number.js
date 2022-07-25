/* Related Topics - Hash Table, Math, Two Pointers

~~~~SETUP~~~~~

Write an algorithm to determine if a number n is happ.

A happy number is defined by the following process:

    Starting with any positive integer, replace the number with the sum of the squares of its digits
    Repeat this process until the number equals 1, or it loops endlessly in a cycle which does not include 1
    The numbers for which this process ends in 1 are happy.

~~~~~Logic~~~~~~~~~
0. Make a bool to represent happiness. Default it to false
1. Make a new array to hold all seen values
2. If check to see if n is 1 or is equal to a seen value. If no, enter loop
    2a. Set n to a string
    2b. Split the string with spaces between each number
    2c. set the array to a map of the squares of the values.
    2d. use reduce to add all the numbers together. Use this value for n, add it to the seen values array
3. If yes, check if it is equal to 1
    3a. If yes, set happiness to true
4. Return happiness

*/

var isHappy = function(n) {
  
    happiness = false
    seenValues = []
    loopExiter = false
    i = -1
  
    while(n != 1 && loopExiter != true)
    {
        
        if(seenValues.includes(n) != true || i === seenValues.indexOf(n))
        {
            n = n.toString().split('').map(Number)
            n = n.map((num) => num*num).reduce((a, b) =>  a + b, 0)
            seenValues.push(n)
            i++
        }

        else
        {
            loopExiter = true       
        }
    }

    if(n === 1)
    {
        happiness = true
    }

    return happiness
};