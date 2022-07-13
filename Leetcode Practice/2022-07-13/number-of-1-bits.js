/* Related Topics -  Divide and Conquer, Bit Manipulation
~~~~~~~~Goal~~~~~~~~~~~
Write a function that takes an unsigned integer and returns the number of '1' bits it has 
    (also known as the Hamming weight)
    
~~~~~~Logic~~~~~~~~~~~
1. Instantiate a variable to count the number of ones
2. Set our bitmask to 1, since that's the smallest value in 32-bit (it's literally 31 0's and then 1)
3. Loop through the binary and apply the mask
    3b. Only apply it if the value of the bit is 1
    3c. Increment the ones variable by 1 if the bit is 1
4. At the end of each loop, Shift the mask over by 1 bit
5. Repeat 32 times for a 32 bit integer
6  Return "ones"



~~~~~~~~~LEARNED~~~~~~~~~~~~~~~~

Bit masking, where you essentially choose which parts to keep or get rid of
EX: 
    Mask: 00111000
    Input:01010101
    Output:00010000

Basically, only the values that are marked "1" in the mask are kept in the output

Additionally, I learned the Shift Assignment Operator "<<=" which moves the specified number of bits 
    in the direction specified and sets the variable to that new value

EX: a = 00001101
    a <<= 1 = 00011010 
    */

var hammingWeight = function(n) {
    
    ones = 0;
    bitMask = 1;

   for ( i = 0; i < 32; i++)
   {
       if ((n & bitMask) != 0)
           {
               ones++
           }
       bitMask <<=1
   }
   return ones
     
};
