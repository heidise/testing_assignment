import { assert, expect } from 'chai';
import words from '../src/words.js';

describe('Testing the Words Function', function() {

    it('Testing basic functionality of words with string=´one, two, three & four´ without pattern', function() {
        expect(words('one, two, three & four')).to.deep.equal(['one', 'two', 'three', 'four']);
    });

    it('Testing basic functionality of words with string=´one, two, three & four´ with pattern=/[^, ]+/g', function() {
        expect(words('one, two, three & four', /[^, ]+/g)).to.deep.equal(['one', 'two', 'three', '&', 'four']);
    });

    it('Testing words function when string is empty', function() {
        expect(words('')).to.deep.equal([]);
    });

    it('Testing words function when string contains special characters: äöå!?', function() {
        expect(words('äöy !å?')).to.deep.equal(['äöy', 'å']);
    });

});