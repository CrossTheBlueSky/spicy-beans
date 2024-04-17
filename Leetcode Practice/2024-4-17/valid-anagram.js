/*~~~~~~~~~~~QUESTION~~~~~~~~~~~~
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.


 ~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~

 1. Probably just sort them and check for equality, no?
 2. This is pretty slow in JS, but in python it could just use sorted'
 3. And I can also start by just seeing if they're the same length, and if they're not I can just immediately say now

*/

var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false
    }
      return s.split('').sort().join('') === t.split('').sort().join('')
    
};