let a = 3;
let b = 5;
let c = 7;

restoA = a % 2;
restoB = b % 2;
restoC = c % 2;

if(restoA == 1 || restoB == 1 || restoC == 1){
    console.log("Existe um numero impar");
}
else{
    console.log("Todos os numeros sao pares");
}