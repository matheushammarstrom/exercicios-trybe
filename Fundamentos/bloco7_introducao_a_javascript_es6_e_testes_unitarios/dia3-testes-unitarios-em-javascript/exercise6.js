const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const addOne = (array)=>{
    newArray = []
    for(let index in array){
        number = array[index] + 1
        newArray.push(number);
    }
    return newArray
}

const output = addOne(myArray);
assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);