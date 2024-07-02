const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const valorTotal = document.getElementById('valorTotal');
const detalhes = document.getElementById('detalhes');

const PRECO_PLANO_BASICO = 5.00; // Custo mensal do plano básico
const MENSAGENS_INCLUSAS = 75; // Quantidade de mensagens inclusas no plano
const PRECO_MENSAGEM_EXCEDENTE_1 = 0.05; // Custo por mensagem acima do plano (até 240 mensagens)
const PRECO_MENSAGEM_EXCEDENTE_2 = 0.10; // Custo por mensagem acima de 240 mensagens

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const quantidadeMensagens = parseInt(document.getElementById('mensagens').value);

    const contaCalculada = calcularContaSMS(quantidadeMensagens);

    if (contaCalculada.erro) {
        exibirErro(contaCalculada.erro);
    } else {
        exibirResultado(contaCalculada.valorTotal, contaCalculada.detalhes);
    }
});

function calcularContaSMS(quantidadeMensagens) {
    if (quantidadeMensagens < 0) {
        return { erro: "Quantidade de mensagens inválida. Digite um valor positivo." };
    }

    let valorTotal = PRECO_PLANO_BASICO;
    let mensagensExcedentes = quantidadeMensagens - MENSAGENS_INCLUSAS;

    if (mensagensExcedentes > 0) {
        if (mensagensExcedentes <= 165) {
            valorTotal += mensagensExcedentes * PRECO_MENSAGEM_EXCEDENTE_1;
        } else {
            valorTotal += 165 * PRECO_MENSAGEM_EXCEDENTE_1;
            mensagensExcedentes -= 165;
            valorTotal += mensagensExcedentes * PRECO_MENSAGEM_EXCEDENTE_2;
        }
    }

    const detalhesCalculados = gerarDetalhes(quantidadeMensagens, mensagensExcedentes, valorTotal);

    return { valorTotal: valorTotal, detalhes: detalhesCalculados };
}

function gerarDetalhes(quantidadeMensagens, mensagensExcedentes, valorTotal) {
    const detalhes = [
        `Plano Básico: R$ ${PRECO_PLANO_BASICO.toFixed(2)}`,
    ];

    if (mensagensExcedentes > 0) {
        detalhes.push(`Mensagens Excedentes: ${mensagensExcedentes} mensagens`);
        if (mensagensExcedentes <= 165) {
            detalhes.push(`  - R$ ${(mensagensExcedentes * PRECO_MENSAGEM_EXCEDENTE_1).toFixed(2)} (até 165 mensagens)`);
        } else {
            detalhes.push(`  - R$ ${(165 * PRECO_MENSAGEM_EXCEDENTE_1).toFixed(2)} (até 165 mensagens)`);
            detalhes.push(`  - R$ ${(mensagensExcedentes - 165) * PRECO_MENSAGEM_EXCEDENTE_2}.toFixed(2)} (acima de 165 mensagens)`);
        }
    }

    detalhes.push(`Total: R$ ${valorTotal.toFixed(2)}`);
    return detalhes.join('\n');
}

function exibirResultado(valorTotal, detalhes) {
    valorTotal.textContent = `Valor Total:`
}