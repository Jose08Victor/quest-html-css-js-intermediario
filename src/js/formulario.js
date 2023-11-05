const formulario = document.querySelector(".formulario");
const camposDoFormulario = document.querySelectorAll(".input");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    camposDoFormulario.forEach((input) => {
        if (input.children[0].value) {
            input.className = "input valid";
        } else {
            input.className = "input invalid";
        }
    });
});