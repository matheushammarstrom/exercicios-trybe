let a = 3;
let b = 5;
let c = 7;

restoA = a % 2;
restoB = b % 2;
restoC = c % 2;

if(restoA == 0 || restoB == 0 || restoC == 0){
    console.log("Existe um numero par");
}
else{
    console.log("Todos os numeros sao impares");
}