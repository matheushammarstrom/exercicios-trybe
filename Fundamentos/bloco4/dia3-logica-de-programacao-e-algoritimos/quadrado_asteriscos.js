//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 10;
let line = "";
let symbol = "*"

for(let index = 0; index < n; index += 1){
    line = line + symbol;
}
for(let index2 = 0; index2 < n; index2 += 1){
    
        console.log(line)
    
}