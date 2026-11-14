const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numerotitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `
    <p>Raiz quadrada: <strong>${numero ** 0.5}</strong>.</p>
    <p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>
    <p>É NaN <strong>${Number.isNaN(numero)}</strong></p>
    <p>Arredodado para baixa: <strong>${Math.floor(numero)}</strong></p>
    <p>Arredodado para cima: <strong>${Math.ceil(numero)}</strong></p>
    <p>Com duas casa descimas: <strong>${numero.toFixed(2)}</strong></p>
`