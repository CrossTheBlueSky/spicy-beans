/* ~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

1.Just use math.pow for everything.
2. Edge cases are if n is 0 or x is 1 (or -1)
    2a. N = 0 means the output will always be 1
    2b. x = 1 will return 1
    2c. x=-1 needs a check on if n is even. If it is, return 1. If not, return -1 

*/

var myPow = function(x, n) {

    out = bigInt(x)

    for(i = 1; i < n; i++){
        out = out*x
    }
  
    return out
};