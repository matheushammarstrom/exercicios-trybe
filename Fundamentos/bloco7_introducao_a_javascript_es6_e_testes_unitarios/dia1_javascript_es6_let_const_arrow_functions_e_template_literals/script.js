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
    if(n>0){
        return fact(n-1)*n;
    } 
    return 1;
}

//Exercise 2.1 Recursive
const fact =(a)=>(a >0) ?fact(a-1)*a:1

//Exercise 2.2
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
const longestWord =(sentence)=>{
    let words = sentence.split(' ')
    let biggestWord = ''
    for(let index =0; index < words.length; index +=1){
      let testWord = words[index]
      // if (testWord.length > biggestWord.length){
      //   biggestWord = testWord
      // }
      (testWord.length > biggestWord.length) ? biggestWord = testWord:biggestWord=biggestWord
    }
    return biggestWord
  }
console.log(longestWord('oi tudo bem'));