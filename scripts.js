// tabuada/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multiplication-form');
    const numberInput = document.getElementById('number');
    const multiplicadorInput = document.getElementById('multiplicador');
    const multiplicadorTable = document.getElementById('multiplicador-operations');
    const multiplicadorTitle = document.getElementById('multiplicador-title').querySelector('span');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtendo os valores dos inputs
        const number = parseInt(numberInput.value);
        const multiplicador = parseInt(multiplicadorInput.value);

        // Verifica se os valores são válidos
        if (isNaN(number) || isNaN(multiplicador)) {
            alert('Por favor, insira números válidos!');
            return;
        }

        // Atualiza o título com o número selecionado
        multiplicadorTitle.textContent = number;

        // Limpa o conteúdo anterior
        multiplicadorTable.innerHTML = '';

        // Gera a tabuada
        for (let i = 1; i <= multiplicador; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            const operationDiv = document.createElement('div');
            operationDiv.classList.add('operation');
            operationDiv.textContent = `${number} x ${i} =`;

            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');
            resultDiv.textContent = number * i;

            row.appendChild(operationDiv);
            row.appendChild(resultDiv);

            multiplicadorTable.appendChild(row);
        }
    });
});
