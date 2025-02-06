import { assert, expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('Testing the isEmpty Function', function() {

    it('Testing basic functionality of isEmpty with parameter 1 (type number)', function() {
        expect(isEmpty(1)).to.equal(true);
    });

    it('Testing isEmpty when Map size is bigger than zero (has content)', function() {
        const map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        expect(isEmpty(map1)).to.equal(false);
    });

    it('Testing isEmpty when Map size is 0', function() {
        const map1 = new Map();
        expect(isEmpty(map1)).to.equal(true);
    });

    it('Testing isEmpty when Set size is bigger than zero (has content)', function() {
        const set1 = new Set();
        set1.add('a', 1);
        set1.add('b', 2);
        expect(isEmpty(set1)).to.equal(false);
    });

    it('Testing isEmpty when Set size is 0', function() {
        const set1 = new Set();
        expect(isEmpty(set1)).to.equal(true);
    });

    it('Testing isEmpty when Object is enumarable', function() {
        const obj = {'a': 1,
                    'b': 2,
        };
        expect(isEmpty(obj)).to.equal(false);
    });

    it('Testing isEmpty when Object isnt enumarable', function() {
        const obj = {};
        expect(isEmpty(obj)).to.equal(true);
    });

    it('Testing isEmpty when string value is ´´ (length is zero)', function() {
        expect(isEmpty("")).to.equal(true);
    });

    it('Testing isEmpty when string value is "test" (length bigger than zero)', function() {
        expect(isEmpty("test")).to.equal(false);
    });

    it('Testing isEmpty when string values has length of 1 (for example ´t´)', function() {
        expect(isEmpty("t")).to.equal(false);
    });

    it('Testing isEmpty when boolean value is true', function() {
        expect(isEmpty(true)).to.equal(true);
    });

    it('Testing isEmpty when boolean value is false', function() {
        expect(isEmpty(false)).to.equal(false);
    });

    it('Testing isEmpty when the value is array which has no elements', function() {
        expect(isEmpty([])).to.equal(true);
    });

    it('Testing isEmpty when the value is array which has elements', function() {
        expect(isEmpty([1,2])).to.equal(false);
    });

    it('Testing isEmpty when the value is null', function() {
        expect(isEmpty(null)).to.equal(true);
    });

    it('Testing isEmpty when the value is undefined', function() {
        expect(isEmpty(undefined)).to.equal(true);
    });

});