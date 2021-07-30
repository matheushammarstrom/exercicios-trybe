let n = 11;
let line = "";
let symbol = "*";
let midLine = (n+1)/2
let controlLeft = midLine;
let controlRight = midLine;

for(let lineIndex = 0; lineIndex < midLine; lineIndex +=1){
    for(let columnIndex = 0; columnIndex <= n; columnIndex +=1){
        if(columnIndex >= controlLeft && columnIndex <= controlRight){
            line = line + symbol;
        }
        else{
            line = line + " ";
        }
    }
    console.log(line);
    line = ""
    controlLeft -= 1;
    controlRight += 1;
}