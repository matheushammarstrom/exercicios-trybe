let custo = 100;
let venda = 150;

custoTotal = custo + 0.2*custo;
lucro = venda - custoTotal;

if(custo < 0 || venda < 0){
    console.log("Erro! Os valores nao podem ser negativos")
}
else{
    console.log(lucro);
}