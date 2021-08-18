var states =['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const button = document.querySelector('#submit')
var stateList = document.querySelector('.state-list')

for(let index =0; index < states.length; index += 1){
    let newState = document.createElement('option')
    newState.innerHTML = states[index]
    stateList.appendChild(newState)
}

// function getForms(event){
//     event.preventDefault();
// }
// button.addEventListener('click', getForms)