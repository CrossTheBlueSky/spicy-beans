/*~~~~~~~~~Question~~~~~~~~~~~~~~~~~``

It's palindrome, my dude. It's a classic

~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~`

    I won't use .reverse (at first). If it's faster I'll submit it to pad my stats at the end

    I think I can do this with one loop
    1. using i and length-i until they meet in the middle. I should toLowerCase before I start this
        1a. Keep checking if [i] and [length-i] are equal. Return false if they aren't
        1b. end the loop if i === length-i
    2. Return true if the loop completes
*/

var isPalindrome = function(s) {
    
    
    return s.replace(/[^0-9a-z]/gi, '').toLowerCase().split("").reverse().join("") === s.replace(/[^0-9a-z]/gi, '').toLowerCase()
     
 };