//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers [0];

for(index = 0; index < numbers.length; index ++){
    if(higherNumber < numbers[index]){
        higherNumber = numbers[index];
    }
}
console.log("O maior numero é : ", higherNumber)