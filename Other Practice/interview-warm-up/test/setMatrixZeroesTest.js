const assert = require('assert')
const setZeroes = require('../set-matrix-zeroes')

describe('Set Matrix Zeroes', () => {
  it('should set entire row and column to 0 if an element is 0', () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ];
    const expected = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1]
    ];
    setZeroes(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  it('should handle matrix with multiple 0 elements', () => {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5]
    ];
    const expected = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0]
    ];
    setZeroes(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  it('should handle matrix with no 0 elements', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    setZeroes(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  it('should handle empty matrix', () => {
    const matrix = [];
    const expected = [];
    setZeroes(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  it('should handle matrix with one row', () => {
    const matrix = [[0, 1, 2, 0]];
    const expected = [[0, 0, 0, 0]];
    setZeroes(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  it('should handle matrix with one column', () => {
    const matrix = [[0], [1], [2], [0]];
    const expected = [[0], [0], [0], [0]];
    setZeroes(matrix);
    assert.deepStrictEqual(matrix, expected);
  });
});