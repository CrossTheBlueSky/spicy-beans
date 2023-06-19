/* ~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~
1. Split the string with spaces as the separator
2. Check the length of the string in the last space of the new array.
3. They got sneaky with the test case and had a lot of tailing spaces, so I added a filter to remove spaces from the array.


*/

var lengthOfLastWord = function(s) {
  
    let arr = s.split(" ").filter((x)=>{ return x !== ""})
    let i = arr.length-1
    return arr[i].length


};