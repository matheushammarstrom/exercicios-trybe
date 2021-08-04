//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function findHighestNumber(numbers) {
    for(let index in numbers){
        if (numbers[0] < numbers[index]){
            highestNumber = numbers[index]
        }
    }
    return highestNumber;
}
console.log(findHighestNumber([-5,-2,-10,-8,-200]));
