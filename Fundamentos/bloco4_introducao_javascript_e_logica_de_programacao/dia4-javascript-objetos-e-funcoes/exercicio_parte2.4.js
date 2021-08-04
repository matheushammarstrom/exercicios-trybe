//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function findBiggestName(names) {
    let biggestName = "";
    for(let index in names){
        if(names[index].length > biggestName.length){
            biggestName = names[index]
        }
    }
    return biggestName;
}
console.log(findBiggestName(["Joao","Maria","Jose"]));