const form = document.querySelector(".formularioFaleConosco");
const mascara = document.querySelector(".mascaraFormulario");

function btnContato() {
    form.style.left = "50%";
    mascara.style.visibility = "visible";
}

function mascaraOff() {
    mascara.style.visibility = "hidden"
    form.style.left = "-35%"
}