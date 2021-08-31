const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const actual1 = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.deepStrictEqual(actual1, [1, 2, 4])

const actual2 = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.notDeepStrictEqual(actual2, [1, 2, 3, 4])

const actual3 = myRemoveWithoutCopy([1, 2, 3, 4, 5])
assert.deepStrictEqual(actual3, [1, 2, 3, 4, 5])

const actual4 = myRemoveWithoutCopy([1, 2, 3, 4], 5)
assert.deepStrictEqual(actual4, [1, 2, 3, 4])