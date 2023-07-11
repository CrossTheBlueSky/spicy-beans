/*~~~~~~~~~~~~~Question~~~~~~~~~~~
Given two binary strings a and b, return their sum as a binary string.

~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~
 1. Honestly this seems incredibly easy UNLESS I'm not allowed to look at documentation
 2. Convert the two binary strings to their int values
 3. Return their int value as a binary string


 ~~~~~~~~~~~Followup~~~~~~~~~~~~~~~~~~
 My initial implementation worked until I hit the very big numbers. I didn't know there was a limit to the number literal in JS, so I had to switch from 
 a parseInt implementation to a BigInt implementation. Same concept though. Convert the binary to ints, add, then convert the sum to a string.
 The "0b" in BigInt is meant to tell you what format the source number is in. 0b is binary, 0x is hexadecimal, no leading 0 means it's regular, 
 0o means it's octal
*/

var addBinary = function(a, b) {
  
  //  return  (parseInt(a, 2) + parseInt(b, 2)).toString(2)
  return  (BigInt("0b"+a) + BigInt("0b"+b)).toString(2)


};