//Exercise 1
const test =  (escopo)=> {
    if (escopo === true) {
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  test(true);

  //Exercise 1.2
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a,b)=> a - b)
  console.log(oddsAndEvens); // 

//Exercise 2.1
const fact = (n) => {
    n*(n-1)
}
console.log(fact(2))
