const {encode, decode} = require('./encodeDecode');

describe('Funcao encode e decode', () => {
  test('Teste se encode e decode são funções', ()=>{
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', ()=>{
    expect(encode('aeiou')).toBe('12345');
  })
  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente',() =>{
    expect(decode('12345')).toBe('aeiou');
  })
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('banana')).toBe('b1n1n1');
    expect(decode('2sc4l1')).toBe('escola');
  })
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('cidade').length).toBe(('cidade').length);
    expect(decode('122344').length).toBe(('122344').length)
  })
})