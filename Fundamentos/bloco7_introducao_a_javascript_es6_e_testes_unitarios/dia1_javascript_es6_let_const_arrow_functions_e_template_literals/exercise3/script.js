let button = document.querySelector('button')
let click = 0;
const countClick = ()=> {
    click +=1;
    button.innerText = click
}
button.addEventListener('click', countClick)