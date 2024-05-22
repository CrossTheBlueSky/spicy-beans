const assert = require('assert')

const spiralOrder = require('../spiral-matrix')

describe('Spiral Matrix', () => {
    it('should return the elements in spiral order for a square matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  
    it('should return the elements in spiral order for a rectangular matrix', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ];
      const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  
    it('should return the elements in spiral order for a single row matrix', () => {
      const matrix = [[1, 2, 3, 4, 5]];
      const expected = [1, 2, 3, 4, 5];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  
    it('should return the elements in spiral order for a single column matrix', () => {
      const matrix = [[1], [2], [3], [4], [5]];
      const expected = [1, 2, 3, 4, 5];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  
    it('should return an empty array for an empty matrix', () => {
      const matrix = [];
      const expected = [];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  
    it('should return the elements in spiral order for a matrix with one element', () => {
      const matrix = [[1]];
      const expected = [1];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  
    it('should return the elements in spiral order for a matrix with negative numbers', () => {
      const matrix = [
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9]
      ];
      const expected = [-1, -2, -3, -6, -9, -8, -7, -4, -5];
      assert.deepStrictEqual(spiralOrder(matrix), expected);
    });
  });