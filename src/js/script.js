const campos   = document.querySelectorAll('.campo');
const enviar   = document.querySelector('.button');

enviar.addEventListener("click", function(event) {
    event.preventDefault();

    campos.forEach((campos) => {
        if (campos.value !== "") {
            campos.classList.remove('erro-validacao');
            campos.classList.add('campo-preenchido');
            campos.nextElementSibling.classList.remove('mostrar');
        } else {
            campos.classList.remove('campo-preenchido');
            campos.classList.add('erro-validacao');
            campos.nextElementSibling.classList.add('mostrar');
        }
    });
});

campos.forEach((campos) => {
    campos.addEventListener("input", () => {
        if (campos.value !== "") {
            campos.classList.add("campo-preenchido")
            campos.classList.remove("erro-validacao")
            campos.nextElementSibling.classList.remove('mostrar');
        } else {
            campos.classList.add("erro-validacao")
            campos.classList.remove("campo-preenchido")
        }
    })
})