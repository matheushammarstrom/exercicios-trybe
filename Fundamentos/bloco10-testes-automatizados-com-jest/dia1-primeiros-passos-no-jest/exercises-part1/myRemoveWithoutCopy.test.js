const { TestWatcher } = require('@jest/core');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

test('Recebe um array e retorna o próprio array sem o item',()=>{
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4, 5], 3)).not.toEqual([1, 2, 3, 4, 5]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})