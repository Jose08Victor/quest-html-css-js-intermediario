const form = document.querySelector(".formulario");
const input = document.querySelectorAll(".input");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i = 0; i < input.length; i++) {

        if (nome.value === "" && input[i].classList.contains("nome")) {
            input[i].classList.remove("valid");
            input[i].classList.add("invalid");
        } else if (email.value === "" && input[i].classList.contains("email")) {
            input[i].classList.remove("valid");
            input[i].classList.add("invalid");
        } else if (telefone.value === "" && input[i].classList.contains("telefone")) {
            input[i].classList.remove("valid");
            input[i].classList.add("invalid");
        } else if (mensagem.value === "" && input[i].classList.contains("mensagem")) {
            input[i].classList.remove("valid");
            input[i].classList.add("invalid");
        } else {
            input[i].classList.remove("invalid");
            input[i].classList.add("valid");
        }
    }
});