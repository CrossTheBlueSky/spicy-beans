const assert = require('assert')

const longestPalindromicSubstring = require('../longest-palindromic-substring')

describe('Longest Palindromic Substring', () => {
    it('should return the longest palindromic substring', () => {
      assert.strictEqual(longestPalindromicSubstring('babad'), 'bab');
      assert.strictEqual(longestPalindromicSubstring('cbbd'), 'bb');
      assert.strictEqual(longestPalindromicSubstring('a'), 'a');
      assert.strictEqual(longestPalindromicSubstring('ac'), 'a');
    });
  
    it('should handle strings with multiple palindromic substrings', () => {
      assert.strictEqual(longestPalindromicSubstring('abacdfgdcaba'), 'aba');
      assert.strictEqual(longestPalindromicSubstring('abcdefedcba'), 'abcdefedcba');
      assert.strictEqual(longestPalindromicSubstring('bananas'), 'anana');
    });
  
    it('should handle strings with all same characters', () => {
      assert.strictEqual(longestPalindromicSubstring('aaaa'), 'aaaa');
      assert.strictEqual(longestPalindromicSubstring('bbbbbb'), 'bbbbbb');
    });
  
    it('should handle empty string', () => {
      assert.strictEqual(longestPalindromicSubstring(''), '');
    });
  
    it('should handle strings with only one character', () => {
      assert.strictEqual(longestPalindromicSubstring('a'), 'a');
      assert.strictEqual(longestPalindromicSubstring('z'), 'z');
    });
  
    it('should handle strings with special characters', () => {
      assert.strictEqual(longestPalindromicSubstring('#$%^&'), '#$%^&');
      assert.strictEqual(longestPalindromicSubstring('a#$%^&a'), 'a#$%^&a');
    });
  
    it('should handle strings with spaces', () => {
      assert.strictEqual(longestPalindromicSubstring('race a car'), ' a ');
      assert.strictEqual(longestPalindromicSubstring('hello world'), 'll');
    });
  });