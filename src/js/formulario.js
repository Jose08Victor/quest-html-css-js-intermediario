const formulario = document.querySelector(".formulario");
const camposDoFormulario = document.querySelectorAll(".input");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    camposDoFormulario.forEach((input) => {
        if (input.children[0].value) {
            input.classList.remove("invalid");
            input.classList.add("valid");
        } else {
            input.classList.remove("valid");
            input.classList.add("invalid");
        }
    });
});