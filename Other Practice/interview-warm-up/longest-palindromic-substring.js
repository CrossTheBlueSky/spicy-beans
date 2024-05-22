/*

Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s.
Example: Input: "babad", Output: "bab" (Note: "aba" is also a valid answer)

~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~

Another dynamic programming problem. UUUUGH

1. Start by initializing another array 
2. Start a loop that goes through every element of the input array
3. Inside that loop, do another loop
    3a. This loop will check if the indexes of i to j make a palindrome, and if so, push that 
        palindrome to the storage array
    3b. If there isn't a palindrome, it will push [j] to the palindrome array
4. When the loop finishes, sort the storage array by length and return the longest 

~~~~~~~~~~~RESULTS~~~~~~~~~~~~~~

1. My original implementation didn't work in all cases. Dynamic programming is a fuck
2. Pasted the solution below. Too burned on dynamic to figure it out right now

*/
function longestPalindromicSubstring(s) {
    let longestPal = '';
  
    for (let i = 0; i < s.length; i++) {
      // Check for odd-length palindromes
      let oddPal = expandAroundCenter(s, i, i);
      if (oddPal.length > longestPal.length) {
        longestPal = oddPal;
      }
  
      // Check for even-length palindromes
      let evenPal = expandAroundCenter(s, i, i + 1);
      if (evenPal.length > longestPal.length) {
        longestPal = evenPal;
      }
    }
  
    return longestPal;
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

module.exports = longestPalindromicSubstring