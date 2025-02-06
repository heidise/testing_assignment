import { assert, expect } from 'chai';
import slice from '../src/slice.js';

describe('Testing the Slice Function', function() {

    it('Testing basic functionality of slice with array=[1, 2, 3, 4] without start and end index', function() {
        let array = [1, 2, 3, 4]
        expect(slice(array)).to.deep.equal([1, 2, 3, 4]);
    });

    it('Testing basic functionality of slice with array=[1, 2, 3, 4] and start slicing index=2', function() {
        let array = [1, 2, 3, 4]
        let number = 2
        expect(slice(array, number)).to.deep.equal([3, 4]);
    });

    it('Testing basic functionality of slice with array=[1, 2, 3, 4], start index=1 and end index=3', function() {
        let array = [1, 2, 3, 4]
        expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
    });

    it('Testing slicing an array with zero (0)', function() {
        let array = [1, 2, 3, 4]
        let number = 0
        expect(slice(array, number)).to.deep.equal([1, 2, 3, 4]);
    });

    it('Testing slicing an empty array', function() {
        let array = []
        let number = 2
        assert.doesNotThrow(
            () => slice(array, number),
            Error
        );
        expect(slice(array, number)).to.deep.equal([]);
    });

    it('Testing slicing when slicing start index is bigger than the array length', function() {
        let array = [1,2,3,4]
        let number = 6
        assert.doesNotThrow(
            () => slice(array, number),
            Error
        );
        expect(slice(array, number)).to.deep.equal([]);
    });

    it('Testing slicing when slicing end index is bigger than the array length', function() {
        let array = [1,2,3,4]
        assert.doesNotThrow(
            () => slice(array, 1,6),
            Error
        );
        expect(slice(array, 1,6)).to.deep.equal([2,3,4,undefined,undefined]);
    });

    it('Testing slicing with negative start slicing index', function() {
        let array = [1,2,3,4]
        let number = (-1)
        assert.doesNotThrow(
            () => slice(array, number),
            Error
        );
        expect(slice(array, number)).to.deep.equal([4]);
    });

    it('Testing slicing with negative end slicing index', function() {
        let array = [1,2,3,4]
        assert.doesNotThrow(
            () => slice(array, 0, -2),
            Error
        );
        expect(slice(array, 0, -2)).to.deep.equal([1,2]);
    });

    it('Testing slicing with start index=1, end index=5 and with an array=[a,b,c,d,e,f,g]', function() {
        let array = ['a','b','c','d','e','f','g']
        let start = 2
        let end = 5
        assert.doesNotThrow(
            () => slice(array, start, end),
            Error
        );
        expect(slice(array, start, end)).to.deep.equal(['c','d','e']);
    });

    it('Testing slicing when end is before start index. Expecting empty array as a result', function() {
        let array = ['a','b','c','d','e','f','g']
        let start = -2
        let end = -5
        assert.doesNotThrow(
            () => slice(array, start, end),
            Error
        );
        expect(slice(array, start, end)).to.deep.equal([]);
    });

    it('Testing slicing when start and end are the same indexes. Expecting empty array as a result', function() {
        let array = ['a','b','c','d','e','f','g']
        let start = 2
        let end = 2
        assert.doesNotThrow(
            () => slice(array, start, end),
            Error
        );
        expect(slice(array, start, end)).to.deep.equal([]);
    });

});