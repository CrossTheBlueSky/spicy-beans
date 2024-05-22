const assert = require('node:assert')
const longestIncreasingSubsequence = require ('../longest-increasing-subsequence')

describe('Longest Increasing Subsequence', () => {
    it('should return the length of the longest increasing subsequence', () => {
      const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
      assert.strictEqual(longestIncreasingSubsequence(nums1), 4);
  
      const nums2 = [0, 1, 0, 3, 2, 3];
      assert.strictEqual(longestIncreasingSubsequence(nums2), 4);
  
      const nums3 = [7, 7, 7, 7, 7, 7, 7];
      assert.strictEqual(longestIncreasingSubsequence(nums3), 1);
    });
  
    it('should handle an array with all decreasing elements', () => {
      const nums = [5, 4, 3, 2, 1];
      assert.strictEqual(longestIncreasingSubsequence(nums), 1);
    });
  
    it('should handle an array with a single element', () => {
      const nums = [42];
      assert.strictEqual(longestIncreasingSubsequence(nums), 1);
    });
  
    it('should handle an empty array', () => {
      const nums = [];
      assert.strictEqual(longestIncreasingSubsequence(nums), 0);
    });
  
    it('should handle an array with duplicate elements', () => {
      const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
      assert.strictEqual(longestIncreasingSubsequence(nums), 6);
    });
  
    it('should handle an array with negative numbers', () => {
      const nums = [10, 9, 2, -5, 3, 7, 101, -18];
      assert.strictEqual(longestIncreasingSubsequence(nums), 4);
    });
  
    it('should handle an array with large numbers', () => {
      const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6, 100000000];
      assert.strictEqual(longestIncreasingSubsequence(nums), 7);
    });
  });