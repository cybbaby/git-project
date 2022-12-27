const INCREASE_BTN = document.querySelector('.increase')
const DECREASE_BTN = document.querySelector('.decrease')
const NUMBER_ELM = document.querySelector('.number')
 

INCREASE_BTN.addEventListener('click',() => {
    NUMBER_ELM.innerHTML= +NUMBER_ELM.innerHTML+1
}) 

DECREASE_BTN.addEventListener('click',() => {
    if(+NUMBER_ELM.innerHTML > 0){
        NUMBER_ELM.innerHTML= +NUMBER_ELM.innerHTML-1
    }
}) 