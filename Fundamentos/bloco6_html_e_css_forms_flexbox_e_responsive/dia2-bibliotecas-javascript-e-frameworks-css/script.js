new window.JustValidate('.js-form', {
    rules: {
        name: {
          required: true
        },
        description: {
          required: true,
          minLength: 20
        },
        date: {
          required: true
        },
        responsibility: {
          required: true
        },
        cpf: {
          required: true,
          maxLength: 11
        },
        adress: {
          required: true,
          minLength: 10
        },
        city: {
          required: true,
          minLength: 3
        },
    },
    messages: 'Erro'
    });
var states =['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const button = document.querySelector('#submit')
var stateList = document.querySelector('.state-list')

document.getElementById('date').DatePickerX.init({
    mondayFirst: true,
    maxDate : Date.now(),
    format : 'dd/mm/yyyy',
    weekDayLabels : ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    shortMonthLabels : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
});

$(document).ready(function(){
    $('select').formSelect();
  });
        

for(let index =0; index < states.length; index += 1){
    let newState = document.createElement('option')
    newState.innerHTML = states[index]
    stateList.appendChild(newState)
}

