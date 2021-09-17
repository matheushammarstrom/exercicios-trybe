const getNumbers = new Promise((resolve, reject) =>{
  const numbersArray =[];
  for(let index = 0; index < 10; index +=1){
    const randomNumber = Math.floor(Math.random()*50 + 1);
    numbersArray.push(randomNumber**2);
  }
})