let isOptionSelected = false;
let indexOption = 0;
let button = document.querySelector(".rating-component__button")
var options = document.querySelectorAll(".rating-component__option");
let paginaInicio = document.querySelector(".rating-component__waiting");
let paginaGracias = document.querySelector(".rating-component__ty");
let opcionElegida = document.querySelector(".rating-component__option-selected")

button.addEventListener('click',(event)=>{
    if(isOptionSelected){
        opcionElegida.textContent=indexOption
        paginaInicio.classList.toggle("hidden")
        paginaGracias.classList.toggle("hidden")

    }
})
options.forEach((option)=>{
    option.addEventListener("click",(e)=>{
        if(isOptionSelected){
            changeStyle(indexOption)
            indexOption=e.target.textContent
            changeStyle(indexOption)
        } else {
            indexOption=e.target.textContent
            isOptionSelected=true;
            changeStyle(indexOption)
        }
    })
})



function changeStyle(opcion){
    options[opcion-1].classList.toggle("rating-component__option--selected")
}


