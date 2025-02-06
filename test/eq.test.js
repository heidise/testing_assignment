import { assert, expect } from 'chai';
import eq from '../src/eq.js';

describe('Testing the eq Function', function() {

    it('Testing basic functionality of eq by comparing two same numbers', function() {
        expect(eq(1,1)).to.equal(true);
    });

    it('Testing eq by comparing two same strings', function() {
        expect(eq('test1','test1')).to.equal(true);
    });

    it('Testing eq by comparing two similar strings but with different lengths', function() {
        expect(eq('test','testi')).to.equal(false);
    });

    it('Testing eq by comparing two different types (string and number) with similar looking values', function() {
        expect(eq(1,'1')).to.equal(false);
    });

    it('Testing eq by comparing two different types (string and array) with different looking values', function() {
        expect(eq(1,[2])).to.equal(false);
    });

    it('Testing eq by comparing two different objects: {a:1} and {a:2}', function() {
        expect(eq({'a':1},{'a':2})).to.equal(false);
    });

    it('Testing eq by comparing two different objects which are almost the same but other one has more elements', function() {
        var obj1 = {'a': {'b': {'c': 1}}};
        var obj2 = {'a': {'b': {'c': 1,
                                'd': 1}}};
        expect(eq(obj1, obj2)).to.equal(false);
    });

    it('Testing eq by comparing NaN and NaN', function() {
        expect(eq(NaN,NaN)).to.equal(true);
    });

    it('Testing eq by comparing two same numbers which are opposite signs (+ and -)', function() {
        expect(eq(10,-10)).to.equal(false);
        expect(eq(-10,10)).to.equal(false);
    });

    it('Testing eq by comparing +0 and -0', function() {
        expect(eq(0,-0)).to.equal(true);
        expect(eq(-0,0)).to.equal(true);
    });

    it('Testing eq by comparing undefined and undefined', function() {
        expect(eq(undefined,undefined)).to.equal(true);
    });

    it('Testing eq by comparing null and null', function() {
        expect(eq(null,null)).to.equal(true);
    });

    it('Testing eq by comparing two boolean values: true and true', function() {
        expect(eq(true,true)).to.equal(true);
    });

    it('Testing eq by comparing two boolean values: true and false', function() {
        expect(eq(true,false)).to.equal(false);
    });

    it('Testing eq by comparing two boolean values: false and false', function() {
        expect(eq(false,false)).to.equal(true);
    });

});