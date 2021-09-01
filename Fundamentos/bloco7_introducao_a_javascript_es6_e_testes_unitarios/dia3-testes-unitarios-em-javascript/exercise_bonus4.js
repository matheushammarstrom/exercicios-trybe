const assert = require('assert');
const getLargestNumber = (array) => {
    let largestNumber = '';
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > array[index + 1]) {
            let bigger = array[index]  
            array[index] = array[index + 1]
            array[index + 1] = bigger
        }
        largestNumber = array[index]
    }
    return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const actual = getLargestNumber(parameter);

assert.strictEqual(typeof actual, 'number')
assert.strictEqual(actual, result)