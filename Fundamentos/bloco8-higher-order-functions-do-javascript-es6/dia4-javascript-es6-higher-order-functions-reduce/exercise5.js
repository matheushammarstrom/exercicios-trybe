const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr)=> {
    let counter  = acc
    curr = curr.toLowerCase().split('')
    curr.forEach((element)=> element === 'a'?counter +=1: counter = counter)
    return counter
  },0)
}
assert.deepStrictEqual(containsA(), 20);