const campos   = document.querySelectorAll('.campo');
const enviar   = document.querySelector('.button');
const required = document.querySelectorAll('.required');

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
