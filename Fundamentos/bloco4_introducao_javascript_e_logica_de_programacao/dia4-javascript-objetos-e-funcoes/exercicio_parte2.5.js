//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function mode(numbers){
  let countNumber = 0;
  let countRepeat = 0;
  let indexMostRepeated = 0;

  for(let index in numbers){
    let number = numbers[index]
    for(let index2 in numbers){
      if(number === numbers[index2]){
        countNumber +=1
      }
    }
      if(countNumber > countRepeat){
        countRepeat = countNumber;
        indexMostRepeated = numbers[index]
      }
      countNumber = 0;    
    }
    return numbers[indexMostRepeated]
  }

console.log(mode([2, 3, 2, 5, 8, 2, 3]))