/*~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~~~~~~
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~

1. Sort both strings (have to split, sort, and re-string them since strings don't have a sort method by default)
2. return str1 === str2

*/

var isAnagram = function(s, t) {
    
    str1 = s.split("").sort().toString()
    str2 = t.split("").sort().toString()

    return str1 === str2
};