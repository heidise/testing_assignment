import { assert, expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('Testing the toInteger Function', function() {

    it('Testing changing Float number to Integer', function() {
        var value = toInteger(2.3);
        expect(Number.isInteger(value)).to.be.true;
        expect(value).to.be.eql(2);
    });

    it('Testing changing negative Float number to Integer', function() {
        var value = toInteger(-1.1);
        expect(Number.isInteger(value)).to.be.true;
        expect(value).to.be.eql(-1);
    });

    it('Testing changing Float number to Integer which would in this case need to be rounded down using number = 1.5.', function() {
        var value = toInteger(1.5);
        expect(Number.isInteger(value)).to.be.true;
        expect(value).to.be.eql(1);
    });

    it('Testing changing Infinite number to Integer. It is supposed to be 1.7976931348623157e+308.', function() {
        var value = toInteger(Infinity);
        expect(Number.isInteger(value)).to.be.true;
        expect(value).to.be.eql(1.7976931348623157e+308);
    });

    it('Testing changing MIN_ VALUE to Integer. It is supposed to be 0.', function() {
        var value = toInteger(Number.MIN_VALUE);
        expect(Number.isInteger(value)).to.be.true;
        expect(value).to.be.eql(0);
    });

    it('Testing changing String value of number to Integer with the test string="1"', function() {
        var value = toInteger("1");
        expect(Number.isInteger(value)).to.be.true;
        expect(value).to.be.eql(1);
    });

    it('Testing changing string="testi" to Integer. This is supposed to return 0 and not supposed to throw error.', function() {
        assert.doesNotThrow(
           () => toInteger("testi"),
            Error
        );
        expect(toInteger("testi")).to.be.eql(0);
    });
});