/*~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~~~~~
You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant 
in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.


~~~~~~~~~~~~Logical breakdown~~~~~~~~~~~~~

1. So I can just take the index of the last value and increment that value by 1? That seems....deceptively easy.
2. The rub comes when you increase a digit from 9 to 10. So in that case, i'll do a loop that checks that, cause I'm sure a test case  
    exists that has multiple 9's in a row
3. And if the leading index is a 9, I need to catch that. If it's true, I'll have to unshift a 1 onto the array.

*/

var plusOne = function(digits) {
  
    
    let i = digits.length-1

    while(digits[i] === 9){
        digits[i] = 0
        if(i === 0){
            digits.unshift(1)
        }
        i--
    }
    digits[i]++
    

    return digits
};