let n = 2;
let divisoresInteiros = 0;

for(let index = 1; index <= n; index += 1){
    if(n % index === 0){
        divisoresInteiros +=1
    }
}
if(divisoresInteiros === 2){
    console.log(n, "é um numero primo")
}
else{
    console.log(n, " nao é um numero primo")
}