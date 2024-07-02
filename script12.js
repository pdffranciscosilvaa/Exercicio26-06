const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const precoVenda = document.getElementById('precoVenda');

const LUCRO_MENOR_50 = 35; // Porcentagem de lucro para valor de compra menor que R$ 50
const LUCRO_50_100 = 25; // Porcentagem de lucro para valor de compra entre R$ 50 e R$ 100
const LUCRO_ACIMA_100 = 15; // Porcentagem de lucro para valor de compra acima de R$ 100

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const valorCompra = parseFloat(document.getElementById('valorCompra').value);

    const precoVendaCalculado = calcularPrecoVenda(valorCompra);

    if (precoVendaCalculado.erro) {
        exibirErro(precoVendaCalculado.erro);
    } else {
        exibirPrecoVenda(precoVendaCalculado.precoVenda);
    }
});

function calcularPrecoVenda(valorCompra) {
    if (valorCompra <= 0) {
        return { erro: "Valor de compra inválido. Digite um valor positivo." };
    }

    let porcentagemLucro;
    if (valorCompra < 50) {
        porcentagemLucro = LUCRO_MENOR_50;
    } else if (valorCompra < 100) {
        porcentagemLucro = LUCRO_50_100;
    } else {
        porcentagemLucro = LUCRO_ACIMA_100;
    }

    const valorLucro = (valorCompra * porcentagemLucro) / 100;
    const precoVenda = valorCompra + valorLucro;

    return { precoVenda: precoVenda };
}

function exibirPrecoVenda(precoVenda) {
    precoVenda.textContent = `Preço de Venda: R$ ${precoVenda.toFixed(2)}`;
}

function exibirErro(mensagemErro) {
    precoVenda.textContent = mensagemErro;
}
