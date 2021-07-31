//Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:


let n = 5;
let line = "";
let symbol = "*";
//Define a variavel midLine como sendo o meio da matriz, e consequentemente a altura da priamide
let midLine = (n+1)/2
//Comecam os controladores direita/esquerda a partir do centro
let controlLeft = midLine;
let controlRight = midLine;

for(let lineIndex = 0; lineIndex < midLine; lineIndex +=1){
    for(let columnIndex = 1; columnIndex <= n; columnIndex +=1){
        if(columnIndex === controlLeft || columnIndex === controlRight || lineIndex === midLine - 1){
            line = line + symbol;
        }
        else{
            line = line + " ";
        }
    }
    console.log(line);
    line = ""
    // afasta os controladores em uma unidade do centro
    controlLeft -= 1;
    controlRight += 1;
}