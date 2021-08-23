function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercise 1 - Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"

  function addDaysOfTheWeek(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      for(let index = 0; index < dezDaysList.length; index +=1){
        let dayItem = document.createElement('li');
        dayItem.innerText = dezDaysList[index];
        dayItem.className = 'day';
        document.getElementById('days').appendChild(dayItem);

        if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
            dayItem.classList.add('holiday')
        }
        if((dezDaysList[index]- 4) % 7 === 0){
            dayItem.classList.add('friday')
        };
      };
  };

  addDaysOfTheWeek();
// Exercise 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"
  function buttonHolidays(feriados){
    buttonHoliday = document.createElement('button');
    buttonHoliday.id = 'btn-holiday'
    buttonHoliday.innerText = feriados
    document.querySelector('.buttons-container').appendChild(buttonHoliday);
  }
  buttonHolidays('Feriados');


button = document.querySelector('#btn-holiday')
button.addEventListener('click', selectDays)

function displayHolidayDaysDays(){
    button = document.querySelector('#btn-holiday')
    button.addEventListener('click', selectDays)
    for(let index = 0; index < 33; index +=1){
        days = document.querySelectorAll('.holiday')[index]
        days.style.backgroundColor = 'green'
    }
}    