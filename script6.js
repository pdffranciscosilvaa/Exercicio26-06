const formulario = document.getElementById('formulario');
const resultados = document.getElementById('resultados');
const mediaMaiorIgual6 = document.getElementById('mediaMaiorIgual6');
const mediaMenor6 = document.getElementById('mediaMenor6');
const erro = document.getElementById('erro');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const numerosString = document.getElementById('numero').value;
    const numeros = numerosString.split(',').map(Number);

    const numerosValidos = validarNumeros(numeros);
    if (numerosValidos.valido) {
        const medias = calcularMedias(numerosValidos.numeros);
        exibirResultados(medias);
    } else {
        exibirErro(numerosValidos.erro);
    }
});

function validarNumeros(numeros) {
    const numerosValidados = [];
    let mensagemErro = "";

    for (let numero of numeros) {
        if (isNaN(numero) || numero < 0 || numero > 10) {
            mensagemErro += `Número inválido: ${numero}. Digite apenas números entre 0 e 10. `;
            break;
        } else {
            numerosValidados.push(numero);
        }
    }

    if (numerosValidados.length < 7) {
        mensagemErro += "Insira 7 números.";
    }

    return { valido: mensagemErro === "", numeros: numerosValidados, erro: mensagemErro };
}

function calcularMedias(numeros) {
    let somaMaiorIgual6 = 0;
    let quantidadeMaiorIgual6 = 0;
    let somaMenor6 = 0;
    let quantidadeMenor6 = 0;

    for (let numero of numeros) {
        if (numero >= 6) {
            somaMaiorIgual6 += numero;
            quantidadeMaiorIgual6++;
        } else {
            somaMenor6 += numero;
            quantidadeMenor6++;
        }
    }

    const mediaMaiorIgual6 = quantidadeMaiorIgual6 === 0 ? 0 : somaMaiorIgual6 / quantidadeMaiorIgual6;
    const mediaMenor6 = quantidadeMenor6 === 0 ? 0 : somaMenor6 / quantidadeMenor6;

    return {
        mediaMaiorIgual6: mediaMaiorIgual6.toFixed(2),
        mediaMenor6: mediaMenor6.toFixed(2)
    };
}

function exibirResultados(medias) {
    mediaMaiorIgual6.textContent = `Média >= 6: ${medias.mediaMaiorIgual6}`;
    mediaMenor6.textContent = `Média < 6: ${medias.mediaMenor6}`;
    erro.textContent = "";
}

function exibirErro(mensagem) {
    erro.textContent = mensagem;
    mediaMaiorIgual6.textContent = "";
    mediaMenor6.textContent = "";
}
