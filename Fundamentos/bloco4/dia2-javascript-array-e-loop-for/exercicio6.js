//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let evenNumbers = [];

for(index = 0; index < numbers.length; index ++){
    if(numbers[index] % 2 === 1){
        evenNumbers.push(numbers[index]);
    }

}
console.log(evenNumbers)