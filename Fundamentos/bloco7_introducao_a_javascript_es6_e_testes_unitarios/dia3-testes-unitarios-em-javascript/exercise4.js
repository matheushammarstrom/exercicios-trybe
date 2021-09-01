const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
const actual1 = myFizzBuzz(15)
assert.strictEqual(actual1, 'fizzbuzz')

const actual2 = myFizzBuzz(9)
assert.strictEqual(actual2, 'fizz')

const actual3 = myFizzBuzz(25)
assert.strictEqual(actual3, 'buzz')

const actual4 = myFizzBuzz(4)
assert.strictEqual(actual4, 4)

const actual5 = myFizzBuzz('oi')
assert.strictEqual(actual5, false)