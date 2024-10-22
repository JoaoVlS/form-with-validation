const form = document.getElementById('form');
const valorDosInputs = document.querySelectorAll(".input-item");

valorDosInputs.forEach(input => {
    input.addEventListener('change', () => {

        const campoObrigatorio = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add("campo-incorreto");
            input.classList.remove("campo-preenchido");
            campoObrigatorio.classList.add("preencher-campo");
        } else {
            input.classList.remove("campo-incorreto");
            campoObrigatorio.classList.remove("preencher-campo");
        }
    })
})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    valorDosInputs.forEach(input => {

        const campoObrigatorio = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add("campo-incorreto");
            campoObrigatorio.classList.add("preencher-campo");
        } else {
            input.classList.remove("campo-incorreto");
            input.classList.add("campo-preenchido");
            campoObrigatorio.classList.remove("preencher-campo");
        }

    });

})

