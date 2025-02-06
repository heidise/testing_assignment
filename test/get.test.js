import { assert, expect } from 'chai';
import get from '../src/get.js';

describe('Testing the Get Function', function() {

    const test_object1 = { 'a': [{ 'b': { 'c': 3 } }],
                            'd': [1,2,3],
                            'e': { 'f': {'g': 1}},
                                    'h': 2};

    it('Testing get function when trying to the first level element from an object with string path format', function() {
        var result = get(test_object1, 'd');
        expect(result).to.deep.equal([1,2,3]);
    });

    it('Testing get function when trying to the second level element from an object with string path format', function() {
        var result = get(test_object1, 'e.f');
        expect(result).to.deep.equal({'g': 1});
    });

    it('Testing get function when trying to the first level element from an object with array path format', function() {
        var result = get(test_object1, ['d']);
        expect(result).to.deep.equal([1,2,3]);
    });

    it('Testing get function when trying to the second level element from an object with array path format', function() {
        var result = get(test_object1, ['e','f']);
        expect(result).to.deep.equal({'g': 1});
    });

    it('Testing get function when the element trying to be accessed is not found from the object', function() {
        var result = get(test_object1, 'e.a');
        expect(result).to.equal(undefined);
    });

    it('Testing get function when object is null or undefined', function() {
        var result1 = get(null, 'e.f');
        var result2 = get(undefined, 'e.f');
        expect(result1).to.equal(undefined);
        expect(result2).to.equal(undefined);
    });

    it('Testing get function when defaultValue for undefined results is 0 instead of undefined (default option)', function() {
        var result1 = get(null, 'e.f.a', 0);
        var result2 = get(test_object1, 'e.f.a', 0);
        expect(result1).to.equal(0);
        expect(result2).to.equal(0);
    });

});