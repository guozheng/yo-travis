var assert = require('assert');

function sayHi () {
    return 'Hi';
}

assert.equal(sayHi(), 'Hi', 'square should work');