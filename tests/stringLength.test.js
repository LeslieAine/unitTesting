const stringLength = require('../src/stringLength.js');

describe('string length tests', () => {
    test('string length should be 4', () => {
        expect(stringLength('abcde')).toBe(5);
    });
})

describe('string length tests for empty string', () => {
    test('string length of empty string', () => {
        expect(() => stringLength('').toThrow(abc));
    });
})