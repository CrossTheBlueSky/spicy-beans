/*~~~~~~~~~~~~Question~~~~~~~~~~~~~~~
There is a function signFunc(x) that returns:

    1 if x is positive.
    -1 if x is negative.
    0 if x is equal to 0.

You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

1. Reduce it by multiplication and then run Math.sign() on it. I don't foresee any weird issues with this, but let's find out
2. For some reason math.sign was returning NaN instead of 0 (which the documentation says it SHOULD return). Fixed with an || 0 in the return

*/

var arraySign = function(nums) {
    
    return Math.sign(nums.reduce((x, y) => x * y)) || 0

};