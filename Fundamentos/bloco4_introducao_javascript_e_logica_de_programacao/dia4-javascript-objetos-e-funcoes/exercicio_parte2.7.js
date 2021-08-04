//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function endingWord(word, ending){
    let count = 0;
    for(let index in ending){
        if(word[word.length - 1 - index] === ending[ending.length - 1 - index]){
            count += 1
        }
    }
    if(count === ending.length){
        return true
    }
    else{
        return false
    }
}

console.log(endingWord("banana", "sana"))