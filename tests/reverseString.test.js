const reverseString = require('../src/reverseString.js');

describe('reverse string tests', () => {
    test('reverse string should be', () => {
        expect(reverseString('abcde')).toBe('edcba');
    });
})