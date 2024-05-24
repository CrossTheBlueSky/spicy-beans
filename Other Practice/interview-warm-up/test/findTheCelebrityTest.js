const assert = require('assert')

const findCelebrity = require('../find-the-celebrity')

describe('Find the Celebrity', () => {
    it('should return the celebrity if one exists', () => {
      const n = 3;
      const knows = (a, b) => {
        if (a === 0 && b === 1) return true;
        if (a === 0 && b === 2) return true;
        if (a === 1 && b === 0) return false;
        if (a === 1 && b === 2) return true;
        if (a === 2 && b === 0) return false;
        if (a === 2 && b === 1) return false;
        return false;
      };
      assert.strictEqual(findCelebrity(n, knows), 1);
    });
  
    it('should return -1 if no celebrity exists', () => {
      const n = 3;
      const knows = (a, b) => {
        if (a === 0 && b === 1) return true;
        if (a === 0 && b === 2) return true;
        if (a === 1 && b === 0) return false;
        if (a === 1 && b === 2) return true;
        if (a === 2 && b === 0) return true;
        if (a === 2 && b === 1) return false;
        return false;
      };
      assert.strictEqual(findCelebrity(n, knows), -1);
    });
  
    it('should handle a single person', () => {
      const n = 1;
      const knows = (a, b) => false;
      assert.strictEqual(findCelebrity(n, knows), 0);
    });
  
    it('should handle two people with no celebrity', () => {
      const n = 2;
      const knows = (a, b) => {
        if (a === 0 && b === 1) return true;
        if (a === 1 && b === 0) return true;
        return false;
      };
      assert.strictEqual(findCelebrity(n, knows), -1);
    });
  
    it('should handle two people with a celebrity', () => {
      const n = 2;
      const knows = (a, b) => {
        if (a === 0 && b === 1) return true;
        if (a === 1 && b === 0) return false;
        return false;
      };
      assert.strictEqual(findCelebrity(n, knows), 1);
    });
  
    it('should handle multiple celebrities', () => {
      const n = 4;
      const knows = (a, b) => {
        if (a === 0 && b === 1) return true;
        if (a === 0 && b === 2) return true;
        if (a === 0 && b === 3) return true;
        if (a === 1 && b === 0) return false;
        if (a === 1 && b === 2) return false;
        if (a === 1 && b === 3) return false;
        if (a === 2 && b === 0) return false;
        if (a === 2 && b === 1) return false;
        if (a === 2 && b === 3) return false;
        if (a === 3 && b === 0) return false;
        if (a === 3 && b === 1) return false;
        if (a === 3 && b === 2) return false;
        return false;
      };
      assert.strictEqual(findCelebrity(n, knows), -1);
    });
  });