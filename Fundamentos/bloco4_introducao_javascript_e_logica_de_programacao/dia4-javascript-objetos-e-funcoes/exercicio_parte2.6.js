//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function totalSum(number){
    total = 0;
    for(let index = 1; index <= number ; index += 1){
        total += index;
    }
    return total;
}
console.log(totalSum(5));