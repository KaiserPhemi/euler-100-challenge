// module import
const assert = require("assert");
const largestPrime = require("./largestPrimeFactor");

// test case
assert.deepStrictEqual(largestPrime(2), 2);
assert.deepStrictEqual(largestPrime(3), 3);
assert.deepStrictEqual(largestPrime(5), 5);
assert.deepStrictEqual(largestPrime(7), 7);
assert.deepStrictEqual(largestPrime(11), 11);
assert.deepStrictEqual(largestPrime(13195), 29);
assert.deepStrictEqual(largestPrime(600851475143), 6857);
