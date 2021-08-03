//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


function palindrome(word) {
    let wordSplitted = word.split('');
    let lettersReversed = wordSplitted.reverse();
    let wordReversed = lettersReversed.join('');
    if(wordReversed === word){
        console.log("A palavra é palindroma");
    }
    else{
        console.log("A palavra nao é palindroma");
    }
}
palindrome("desenvolvimento");
