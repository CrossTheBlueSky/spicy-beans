/*~~~~~~~~~~Question~~~~~~~~~~
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

~~~~~~~~~~~~~~Logical breakdown~~~~~~~~~~~~~~~~~~

    1. I only need to know how many odd numbers there are, not return a list of them.
    2. The first intuition I have is to subtract the low from the high and add 1 to get the size of the range.
    3. If it's even, divide by 2 and return. 
    4. If it's odd, divide by 2 and round up or down based on what number the range starts on (odd start round up, evens round down)
*/

var countOdds = function(low, high) {

    const range = (high-low + 1 )
  
      if(range % 2 !== 0 && low % 2 === 0){
          return Math.floor(range/2)
      } else if (range % 2 !== 0 && low % 2 !== 0){
          return Math.ceil(range/2)
      } else{
          return range/2
      }
  };