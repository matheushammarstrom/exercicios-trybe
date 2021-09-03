const result = (betNumbers, checkNumbers) =>{
    const number = Math.floor(Math.random()*5)+1;
    return checkNumbers(betNumbers, number);
}
const checkNumbers = (number1, number2)=>{ 
    return number1 === number2? 'Parabéns, voce ganhou!':'Tente novamente'
}
console.log(result(3, checkNumbers))