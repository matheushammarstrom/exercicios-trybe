//Exercise 2.1
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  const addShift = (object, key, value) =>{
    object[key] = value
  }
  addShift(lesson2, 'turno', 'manha')

  //Exercise 2.2

  const showKeys = (object)=> console.log(Object.keys(object))

  //Exercise 2.3

  const lengthObject = (object) => console.log(Object.keys(object).length)

  //Exercise 2.4

  const showValues = (object) => console.log(Object.values(object))

  //Exercise 2.5

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

  //Exercise 2.6

  const totalStudents = ()=> {
      let soma =0
      for(let index in allLessons){
          soma += Object.values(allLessons[index])[1];
      }
      console.log(soma)
  }
  //Exercise 2.7

  const findValue = (object, position) => Object.values(object)[position]

  //Exercise 2.8

  const verifyPair = (object, key, value) => (object[key] === value)? true: false