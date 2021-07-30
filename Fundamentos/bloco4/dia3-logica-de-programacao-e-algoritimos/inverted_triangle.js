//Agora inverta o lado do triângulo. 

let n = 10;
let line = "";
let symbol = "*";
let position = n;

for (let lineIndex = 0; lineIndex < n; lineIndex +=1){
    for(let columnIndex =0; columnIndex < n; columnIndex += 1){
        if(columnIndex < position){
            line = line + " ";
        }
        else{
            line = line + symbol;
        }
    }
    console.log(line);
    line = '';
    position -=1;
}


