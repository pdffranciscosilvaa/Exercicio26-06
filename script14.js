const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const salarioTotal = document.getElementById('salarioTotal');
const detalhesComissao = document.getElementById('detalhesComissao');

const SALARIO_FIXO = 1800.00; // Salário fixo mensal
const TAXA_COMISSAO_1 = 0.03; // Taxa de comissão para vendas até 10 mil
const TAXA_COMISSAO_2 = 0.05; // Taxa de comissão para vendas entre 10 e 30 mil
const TAXA_COMISSAO_3 = 0.08; // Taxa de comissão para vendas acima de 30 mil
const LIMITE_VENDA_1 = 10000.00; // Limite de venda para a primeira faixa de comissão
const LIMITE_VENDA_2 = 30000.00; // Limite de venda para a segunda faixa de comissão

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const valorVendas = parseFloat(document.getElementById('valorVendas').value);

    const salarioCalculado = calcularSalarioTotal(valorVendas);

    if (salarioCalculado.erro) {
        exibirErro(salarioCalculado.erro);
    } else {
        exibirResultado(salarioCalculado.salarioTotal, salarioCalculado.detalhesComissao);
    }
});

function calcularSalarioTotal(valorVendas) {
    if (valorVendas < 0) {
        return { erro: "Valor das vendas inválido. Digite um valor positivo." };
    }

    let comissao = 0;
    let valorComissao;
    let salarioTotalCalculado = SALARIO_FIXO;

    if (valorVendas <= LIMITE_VENDA_1) {
        valorComissao = valorVendas * TAXA_COMISSAO_1;
    } else if (valorVendas <= LIMITE_VENDA_2) {
        valorComissao = LIMITE_VENDA_1 * TAXA_COMISSAO_1;
        valorComissao += (valorVendas - LIMITE_VENDA_1) * TAXA_COMISSAO_2;
    } else {
        valorComissao = LIMITE_VENDA_1 * TAXA_COMISSAO_1;
        valorComissao += (LIMITE_VENDA_2 - LIMITE_VENDA_1) * TAXA_COMISSAO_2;
        valorComissao += (valorVendas - LIMITE_VENDA_2) * TAXA_COMISSAO_3;
    }

    salarioTotalCalculado += valorComissao;
    const detalhesComissaoCalculada = gerarDetalhesComissao(valorVendas, valorComissao);

    return { salarioTotal: salarioTotalCalculado, detalhesComissao: detalhesComissaoCalculada };
}

function gerarDetalhesComissao(valorVendas, valorComissao) {
    const detalhes = [
        `Salário Fixo: R$ ${SALARIO_FIXO.toFixed(2)}`,
    ];

    if (valorComissao > 0) {
        detalhes.push(`Comissão: R$ ${valorComissao.toFixed(2)}`);
        if (valorVendas <= LIMITE_VENDA_1);
    }
}

