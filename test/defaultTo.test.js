import { assert, expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('Testing the defaultTo Function', function() {

    it('Testing basic functionality of defaultTo with value=1 and defaultValue=20', function() {
        expect(defaultTo(1,20)).to.equal(1);
    });

    it('Testing defaultTo with value=undefined and defaultValue=´default´', function() {
        expect(defaultTo(undefined,"default")).to.equal("default");
    });

    it('Testing defaultTo with value=null and defaultValue=´default´', function() {
        expect(defaultTo(null,"default")).to.equal("default");
    });

    it('Testing defaultTo with value=NaN and defaultValue=´default´', function() {
        expect(defaultTo(NaN,"default")).to.equal("default");
    });

    it('Testing defaultTo with value=null and defaultValue=undefined', function() {
        expect(defaultTo(null,undefined)).to.equal(undefined);
    });

});