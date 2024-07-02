const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const precoFinal = document.getElementById('precoFinal');

const IMPOSTOS = 15; // Porcentagem fixa de impostos

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    const porcentagemDistribuidor = parseFloat(document.getElementById('porcentagemDistribuidor').value);

    const precoFinalCalculado = calcularPrecoFinal(custoFabrica, porcentagemDistribuidor);

    if (precoFinalCalculado.erro) {
        exibirErro(precoFinalCalculado.erro);
    } else {
        exibirPrecoFinal(precoFinalCalculado.precoFinal);
    }
});

function calcularPrecoFinal(custoFabrica, porcentagemDistribuidor) {
    if (custoFabrica <= 0 || porcentagemDistribuidor < 0) {
        return { erro: "Valores inválidos. Digite valores positivos." };
    }

    const valorDistribuidor = (custoFabrica * porcentagemDistribuidor) / 100;
    const valorImpostos = (custoFabrica * IMPOSTOS) / 100;
    const precoFinal = custoFabrica + valorDistribuidor + valorImpostos;

    return { precoFinal: precoFinal };
}

function exibirPrecoFinal(precoFinal) {
    precoFinal.textContent = `Preço Final: R$ ${precoFinal.toFixed(2)}`;
}

function exibirErro(mensagemErro) {
    precoFinal.textContent = mensagemErro;
}
