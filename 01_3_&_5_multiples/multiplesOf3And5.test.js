// module import
const assert = require('assert');
const multiples = require('./multiplesOf3And5');

// test cases
assert.deepStrictEqual(multiples(1000), 233168)
assert.deepStrictEqual(multiples(49), 543)
assert.deepStrictEqual(multiples(19564), 89301183)
assert.deepStrictEqual(multiples(8456), 16687353)