const assert = require('assert');
const greetPeople = (people) => {
  let array = [];
  for (const person in people) {
    let greeting = `Hello ${people[person]}`;
    array.push(greeting)
  }
  return array;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function')
assert.deepStrictEqual(typeof greetPeople(parameter), 'object')
assert.deepStrictEqual(greetPeople(parameter), result);
