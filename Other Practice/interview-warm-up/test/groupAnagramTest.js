const assert = require('assert')

const groupAnagrams = require('../group-anagrams')

describe('Group Anagrams', () => {
    
    it('should group anagrams together', () => {
      const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
      const expected1 = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
      assert.deepStrictEqual(groupAnagrams(strs1), expected1);
  
      const strs2 = [''];
      const expected2 = [['']];
      assert.deepStrictEqual(groupAnagrams(strs2), expected2);
  
      const strs3 = ['a'];
      const expected3 = [['a']];
      assert.deepStrictEqual(groupAnagrams(strs3), expected3);
    });
  
    it('should handle empty input array', () => {
      const strs = [];
      const expected = [];
      assert.deepStrictEqual(groupAnagrams(strs), expected);
    });
  
    it('should handle array with all distinct anagrams', () => {
      const strs = ['cat', 'dog', 'rat', 'car'];
      const expected = [['cat'], ['dog'], ['rat'], ['car']];
      assert.deepStrictEqual(groupAnagrams(strs), expected);
    });
  
    it('should handle array with all identical strings', () => {
      const strs = ['cat', 'cat', 'cat', 'cat'];
      const expected = [['cat', 'cat', 'cat', 'cat']];
      assert.deepStrictEqual(groupAnagrams(strs), expected);
    });
  
    it('should handle array with repeated anagrams', () => {
      const strs = ['cat', 'tac', 'dog', 'god', 'act'];
      const expected = [['cat', 'tac', 'act'], ['dog', 'god']];
      assert.deepStrictEqual(groupAnagrams(strs), expected);
    });
  
    it('should handle array with mixed case strings', () => {
      const strs = ['Eat', 'tea', 'Tan', 'ate', 'nat', 'bat'];
      const expected = [['Eat', 'tea', 'ate'], ['Tan', 'nat'], ['bat']];
      assert.deepStrictEqual(groupAnagrams(strs), expected);
    });
  });