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
