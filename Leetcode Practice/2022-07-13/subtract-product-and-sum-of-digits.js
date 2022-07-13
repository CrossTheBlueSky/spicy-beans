/* Related Topics - Math

~~~~~~~~~~Goal~~~~~~~~~

Given an integer n, return the difference between the product of its digits and the sum of its digits

~~~~~~~~~Logic~~~~~~~~~~

1. First off, check to make sure it's at least 2 digits.
    1b. I don't know if logically I should return n or 0 if it's a single digit, but we'll find out
2. Convert the integer into an array of digits
3. Use reduce() to find the sum of all digits
4. Use reduce() again to find the product of all digits
5. return product - sum

~~~~~~~~~LEARNED~~~~~~~~~~~~

Learned about the Number function, which can make Array.from force the values inputted into being numbers 
instead of characters.
*/

var subtractProductAndSum = function(n) {
    
    allDigits = Array.from(String(n), Number)
    
    sumOfDigits = allDigits.reduce((previousValue,currentValue) => previousValue+currentValue)
    productOfDigits = allDigits.reduce((previousValue,currentValue) => previousValue*currentValue)
    
    return productOfDigits-sumOfDigits
    
  
    
    
};