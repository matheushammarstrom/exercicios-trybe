let headerBlock = document.querySelector("#header-container")
headerBlock.style.backgroundColor = "green"
headerBlock.style.color = "white"

for(let index = 0; index <document.getElementsByTagName("h3").length; index +=1){
    let titlecolor = document.getElementsByTagName("h3")[index]
    titlecolor.style.color = "white"
}
let colorBlock = document.getElementsByClassName("emergency-tasks")[0];
colorBlock.style.backgroundColor = "orange";

let colorBlock2 = document.getElementsByClassName("no-emergency-tasks")[0];
colorBlock2.style.backgroundColor = "yellow";

let titleBlock = document.querySelectorAll("section div h3")
titleBlock[0].style.backgroundColor = "purple";
titleBlock[1].style.backgroundColor = "purple";
titleBlock[2].style.backgroundColor = "black";
titleBlock[3].style.backgroundColor = "black";

let footerBlock = document.querySelector("#footer-container")
footerBlock.style.backgroundColor = "green"