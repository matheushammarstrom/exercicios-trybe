const hof = (arrayCorrect, arrayVerify, check)=>{
    console.log(check(arrayCorrect, arrayVerify)); 
}
const checkArrays = (array1, array2) =>{
    let counter = 0
    for(let index in array1){
        if(array1[index] === array2[index]){
            counter +=1
        } else if(array2[index] !== 'N.A'){
            counter -=0.5
        }
    }
    return counter;
}
hof(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'],['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkArrays)