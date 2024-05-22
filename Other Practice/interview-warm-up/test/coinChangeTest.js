const assert = require('assert');

const coinChange = require('../coin-change.js')

describe('coinChange', () => {
  it('should return the minimum number of coins needed to make up the amount', () => {
    assert.strictEqual(coinChange([1, 2, 5], 11), 3);
    assert.strictEqual(coinChange([1, 2, 5], 7), 2);
    assert.strictEqual(coinChange([2], 3), -1);
    assert.strictEqual(coinChange([1], 0), 0);
    assert.strictEqual(coinChange([1], 1), 1);
    assert.strictEqual(coinChange([1], 2), 2);
  });

  it('should return -1 if the amount cannot be made up by any combination of coins', () => {
    assert.strictEqual(coinChange([2, 5], 3), -1);
    assert.strictEqual(coinChange([3, 7], 11), -1);
    assert.strictEqual(coinChange([5, 10], 8), -1);
  });

  it('should handle large inputs efficiently', () => {
    assert.strictEqual(coinChange([1, 2, 5], 100), 20);
    assert.strictEqual(coinChange([1, 2, 5, 10], 500), 50);
    assert.strictEqual(coinChange([1, 2, 5, 10, 20, 50], 1000), 20);
  });

  it('should handle empty coin array', () => {
    assert.strictEqual(coinChange([], 5), -1);
  });

  it('should handle zero amount', () => {
    assert.strictEqual(coinChange([1, 2, 5], 0), 0);
  });

  it('should handle negative amount', () => {
    assert.strictEqual(coinChange([1, 2, 5], -5), -1);
  });
});