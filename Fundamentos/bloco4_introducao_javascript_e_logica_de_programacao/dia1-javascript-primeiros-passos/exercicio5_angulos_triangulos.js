let a = 30;
let b = 100
let c = 50;
soma = a + b + c;

if(a <=0 || b <=0 || c <=0){
    console.log("O angulo nao pode ser negativo")
}
else{
    if(soma == 180){
        console.log("Os valores representam os angulos internos de um triangulo")
    }
    else{
        console.log("Os valores nao representam os angulos internos de um triangulo")
    }
}