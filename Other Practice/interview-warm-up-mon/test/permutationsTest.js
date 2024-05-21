const assert = require('assert')
const permutations = require('../permutations')

describe('Permutations', () => {
    it('should return all possible permutations of the given array', () => {
      assert.deepStrictEqual(permutations([1, 2, 3]), [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ]);
  
      assert.deepStrictEqual(permutations([0, 1]), [
        [0, 1],
        [1, 0]
      ]);
  
      assert.deepStrictEqual(permutations([1]), [[1]]);
    });
  
    it('should return an empty array for an empty input array', () => {
      assert.deepStrictEqual(permutations([]), []);
    });
  
    it('should handle arrays with duplicate elements', () => {
      assert.deepStrictEqual(permutations([1, 1, 2]), [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1]
      ]);
  
      assert.deepStrictEqual(permutations([1, 2, 2]), [
        [1, 2, 2],
        [2, 1, 2],
        [2, 2, 1]
      ]);
    });
  
    it('should handle arrays with negative numbers', () => {
      assert.deepStrictEqual(permutations([-1, 0, 1]), [
        [-1, 0, 1],
        [-1, 1, 0],
        [0, -1, 1],
        [0, 1, -1],
        [1, -1, 0],
        [1, 0, -1]
      ]);
    });
  
    it('should handle arrays with large numbers', () => {
      assert.deepStrictEqual(permutations([1000000, 1000001, 1000002]), [
        [1000000, 1000001, 1000002],
        [1000000, 1000002, 1000001],
        [1000001, 1000000, 1000002],
        [1000001, 1000002, 1000000],
        [1000002, 1000000, 1000001],
        [1000002, 1000001, 1000000]
      ]);
    });
  });