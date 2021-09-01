const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = (array)=>{
    newArray =[];
    for(let index in array){
        let length = array[index].length
        newArray.push(length)
    }
    return newArray
    
}
assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);