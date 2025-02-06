import { assert, expect } from 'chai';
import filter from '../src/filter.js';

describe('Testing the Filter Function', function() {

    it('Testing basic functionality of filter function with object of users and filtering them by active field', function() {
        var users = [
            { 'user': 'user1', 'active': true },
            { 'user': 'user2', 'active': false }
            ]
        expect(filter(users, ({ active }) => active)).to.deep.equal([
            {
             "user": "user1",
             "active": true,
            }
            ]);
    });

    it('Testing filter function with array of numbers from which only >2 number should be returned to their own array', function() {
        var array = [1,2,3]
        expect(filter(array, (x) => x>2)).to.deep.equal([3]);
    });

    it('Testing filter function with an empty array', function() {
        var array = []
        expect(filter(array, (x) => x>2)).to.deep.equal([ [] ]);
    });

    it('Testing filter function when no elements match the filtering predicate', function() {
        var array = [1,2,1,1]
        expect(filter(array, (x) => x>2)).to.deep.equal([ [] ]);
    });

});