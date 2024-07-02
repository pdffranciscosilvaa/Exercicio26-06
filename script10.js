const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const maiorValor = document.getElementById('maiorValor');
const menorValor = document.getElementById('menorValor');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    const valor3 = parseInt(document.getElementById('valor3').value);

    const valores = [valor1, valor2, valor3];
    const maior = encontrarMaior(valores);
    const menor = encontrarMenor(valores);

    exibirResultado(maior, menor);
});

function encontrarMaior(valores) {
    let maior = valores[0];
    for (let valor of valores) {
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}

function encontrarMenor(valores) {
    let menor = valores[0];
    for (let valor of valores) {
        if (valor < menor) {
            menor = valor;
        }
    }
    return menor;
}

function exibirResultado(maior, menor) {
    maiorValor.textContent = `Maior Valor: ${maior}`;
    menorValor.textContent = `Menor Valor: ${menor}`;
}
