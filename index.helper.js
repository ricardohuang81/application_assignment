const quotes = require('random-movie-quotes');

const getQuoteMock = function() {
    const quotes = ["Quote 1", "Quote 2", "Quote 3"];
    return quotes[1];
}

const getQuote = function() {
    return quotes.getQuote();
    // return getQuoteMock();
}

module.exports = getQuote;