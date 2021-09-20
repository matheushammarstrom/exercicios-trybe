const getNumbers = new Promise((resolve, reject) =>{
  const numbersArray =[];
  for(let index = 0; index < 10; index +=1){
    const randomNumber = Math.floor(Math.random()*50 + 1);
    numbersArray.push(randomNumber**2);
  }
  const totalSum = numbersArray.reduce(((acc, curr)=> acc + curr),0);
  if(totalSum < 8000){
    return resolve(totalSum)
  }
  reject()
})
.then((sum)=>{
  const array = [2, 3, 5, 10];
  const newArray = array.map((element) => sum/element)
  return newArray
})
.then((array) => console.log(array.reduce((acc, curr) => acc + curr,0)))
.catch(()=> console.log('É mais de oito mil! Essa promise deve estar quebrada!'))