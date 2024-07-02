const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const operacaoRealizada = document.getElementById('operacaoRealizada');
const resultadoFinal = document.getElementById('resultadoFinal');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;

    const resultadoOperacao = realizarOperacao(numero1, numero2, operacao);

    if (resultadoOperacao.erro) {
        exibirErro(resultadoOperacao.erro);
    } else {
        exibirResultado(numero1, numero2, operacao, resultadoOperacao.resultado);
    }
});

function realizarOperacao(numero1, numero2, operacao) {
    switch (operacao) {
        case "+":
            return { resultado: numero1 + numero2 };
        case "-":
            return { resultado: numero1 - numero2 };
        case "*":
            return { resultado: numero1 * numero2 };
        case "/":
            if (numero2 === 0) {
                return { erro: "Erro: Divisão por zero." };
            } else {
                return { resultado: numero1 / numero2 };
            }
        default:
            return { erro: "Operação inválida." };
    }
}

function exibirResultado(numero1, numero2, operacao, resultado) {
    operacaoRealizada.textContent = `Operação: ${numero1} ${operacao} ${numero2}`;
    resultadoFinal.textContent = `Resultado: ${resultado.toFixed(2)}`;
}

function exibirErro(mensagemErro) {
    operacaoRealizada.textContent = "";
    resultadoFinal.textContent = mensagemErro;
}
