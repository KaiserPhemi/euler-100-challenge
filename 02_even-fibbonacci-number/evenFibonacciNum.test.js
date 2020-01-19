// module import
const assert = require('assert');
const evenFibNum = require('./evenFibonacciNum');

// test cases
assert.deepStrictEqual(evenFibNum(10), 44)
assert.deepStrictEqual(evenFibNum(18), 3382)
assert.deepStrictEqual(evenFibNum(23), 60696)
assert.deepStrictEqual(evenFibNum(43), 350704366)
