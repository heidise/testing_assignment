import { assert, expect } from 'chai';
import reduce from '../src/reduce.js';

describe('Testing the Reduce Function', function() {

    it('Testing basic functionality of reduce by calling it: reduce([1, 2], (x, y) => x * y, 1))', function() {
        var result = reduce([1, 2], (x, y) => x * y, 1);
        expect(result).to.be.eq(2);
    });

});