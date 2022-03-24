let btnButton = document.querySelector('#btn-enviar');

btnButton.addEventListener('click', verificaDefault);

function verificaDefault(event) {
    event.preventDefault();
}

let limpBtn = document.querySelector('#limpa-btn');
limpBtn.addEventListener('click', clearBtn);

function clearBtn() {
    let input = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');

    for (let i = 0; i < input.length; i += 1) {
        let input2 = input[i];
        input2.value = '';
        input2.checked = false;
    }
    textArea.value = '';
}