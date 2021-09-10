const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const callback = (acc, current) => acc.concat(current)
  return arrays.reduce(callback,[])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);