/*~~~~~~~~~~~~QUESTION~~~~~~~~~~~
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~

1. Can I just turn it into an array and reverse it?
2. Check to see if it's negative first and if so make sure it's negative again when it returns

*/

var reverse = function(x) {
    
  
    
    let neg = false
    
    if(x < 0){
        neg = true
        x = x*(-1)

    }

    out = x.toString().split('').reverse()
  


    if(neg){
       out.unshift("-")
    }
    
    out = out.join('')
     if(out >= (2**31) || out <= -1*(2**31)-1){
        return 0
    }else{
        return out
    }

    
};