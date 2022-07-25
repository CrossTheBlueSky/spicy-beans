/* Related Topics - Array, Math

~~~~~~~~~~SETUP~~~~~~~~~
There is a function signFunc(x) that returns:

    1 if x is positive
    -1 if x is negative
    0 if x is equal to 0

You are given an integer array "nums". Let "product" be the product of all values in the array "nums"

return signFunc(product)

~~~~~~~~~~~LOGIC~~~~~~~~~~

1. So there's no need to do any actual math here. Just need to check positive, negative, or 0
    1a. First check would be if there's any 0's in the array, because that immediately means the product is 0
    1b. Second check would be if there's an ODD Number of negative values in the array, because that returns -1
    1c. Otherwise, return the default state of 1.
2. Uh, I guess I said all the logic in 1, didn't I?

*/

var arraySign = function(nums) 
{

    productSign = 1

    let allNegative = function(value)
    {
        
        return value < 0
    }

    if (nums.includes(0))
    {
        productSign = 0
    }


    else
    {
    
        nums = nums.filter(allNegative)
        
       if(nums.length % 2 != 0)
       {
            productSign = -1   
       }
        
    } 
    return productSign

    
};