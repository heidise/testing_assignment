import { assert, expect } from 'chai';
import chunk from '../src/chunk.js';

describe('Testing the Chunk Function', function() {

    it('Testing basic functionality of chunk with array=[a,b,c,d] and length=2', function() {
        let array = ['a', 'b', 'c', 'd']
        let number = 2
        expect(chunk(array, number)).to.deep.equal([['a','b'], ['c','d']]);
    });

    it('Testing the situation when chunk length is zero (0)', function() {
        let array = [1,2]
        let number = 0
        expect(chunk(array, number)).to.deep.equal([]);
    });

    it('Testing if function throws error when chunk is longer than the array', function() {
        let array = ['a','b','c','d']
        let number = 5
        assert.doesNotThrow(
            () => chunk(array, number),
            Error
        );
    });

    it('Testing when chunk cant be split evenly. Final chunk should be the remaining elements', function() {
        let array = [1,2,3,4] 
        let number = 3
        assert.doesNotThrow(
            () => chunk(array, number),
            Error
        );

        expect(chunk(array, number)).to.deep.equal([[1,2,3], [4]]);
    });

});