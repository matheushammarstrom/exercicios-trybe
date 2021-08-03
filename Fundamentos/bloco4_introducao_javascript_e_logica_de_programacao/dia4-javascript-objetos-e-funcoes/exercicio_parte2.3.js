//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function findLowestNumber(numbers) {
    for(let index in numbers){
        if (numbers[0] > numbers[index]){
            lowestNumber = numbers[index]
        }
    }
    return lowestNumber;
}
console.log(findLowestNumber([-5,-2,-10,-8,-200]));
