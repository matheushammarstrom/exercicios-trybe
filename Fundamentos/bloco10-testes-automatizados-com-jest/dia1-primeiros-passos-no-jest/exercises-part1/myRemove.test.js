const myRemove = require('./myRemove');

test('Remove um item de um array',()=>{
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3])).toEqual([1, 2, 3]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})