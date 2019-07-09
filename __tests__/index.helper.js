const getQuote = require('../index.helper.js');

test('getQuote returns a non-null value', () => {
    expect(getQuote()).not.toBeNull();
});

test('getQuote returns a string with at least 1 letter', () => {
    const result = getQuote();
    expect(result.length).toBeGreaterThanOrEqual(1);
});

test.todo('getQuote should return a value at all times');