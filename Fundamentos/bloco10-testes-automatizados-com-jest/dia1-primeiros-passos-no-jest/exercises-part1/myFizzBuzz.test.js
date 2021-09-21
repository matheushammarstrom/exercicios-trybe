const myFizzBuzz = require('./myFizzBuzz');

test('recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', ()=>{
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(25)).toBe('buzz');
  expect(myFizzBuzz(4)).toBe(4);
  expect(myFizzBuzz('oi')).toBe(false);
})