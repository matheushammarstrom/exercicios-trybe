const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (array) =>{
    let positionMiddle = (array.length-1)/2
    let newArray =[]
    newArray.push(array[positionMiddle])
    array.splice(positionMiddle, 1)
    return newArray
}
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);

