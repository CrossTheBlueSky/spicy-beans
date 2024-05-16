var assert = require('assert');
const discountedCart = require('../take-home-assessment.js')

describe('discountedCart', function () {

    it('should return the correct cart total with no discounts', function(){
        const products = [['10', 'EMPTY', 'EMPTY'], ['15', 'EMPTY', 'EMPTY'], ['20', 'EMPTY', 'EMPTY']]
        const discounts = []
        assert.equal(discountedCart(products, discounts), 45)
    })
    it('should apply discounts of type 0 correctly', function() {
        const products = [['10', 'd0', 'EMPTY'], ['15', 'd1', 'EMPTY'], ['20', 'd2', 'EMPTY']];
        const discounts = [['d0', '0', '8'], ['d1', '0', '12'], ['d2', '0', '18']];
        assert.equal(discountedCart(products, discounts), 38);
      })
    it('should apply discounts of type 1 correctly', function() {
        const products = [['100', 'd0', 'EMPTY'], ['200', 'd1', 'EMPTY'], ['300', 'd2', 'EMPTY']];
        const discounts = [['d0', '1', '10'], ['d1', '1', '20'], ['d2', '1', '30']];
        assert.equal(discountedCart(products, discounts), 460);
      })
    it('should apply discounts of type 2 correctly', function(){
        const products = [['50', 'd0', 'EMPTY'], ['80', 'd1', 'EMPTY'], ['120', 'd2', 'EMPTY']]
        const discounts = [['d0', '2', '5'], ['d1', '2', '10'], ['d2', '2', '20']]
        assert.equal(discountedCart(products, discounts), 215)
    })
    it('should handle multiple discount types and return the cheapest price', function(){

        const products = [['10', 'd0', 'd1'], ['15', 'd2', 'd3'], ['20', 'd4', 'd5']]
        const discounts = [
        ['d0', '1', '10'],
        ['d1', '2', '2'],
        ['d2', '0', '12'],
        ['d3', '2', '3'],
        ['d4', '1', '15'],
        ['d5', '2', '4'],
        ]
        assert.equal(discountedCart(products, discounts), 36)

    })
    it('should return 0 if there are no products', function(){
        const products = []
        const discounts = [
            ['d0', '1', '10'],
            ['d1', '2', '2'],
            ['d2', '0', '12'],
            ['d3', '2', '3'],
            ['d4', '1', '15'],
            ['d5', '2', '4'],
            ]
        assert.equal(discountedCart(products, discounts), 0)

    })

  });
