const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const valorTotal = document.getElementById('valorTotal');

const PRECOS = {
    tomate: 5.35,
    cebola: 3.32,
    aipim: 2.87,
    batata: 4.43,
    cenoura: 3.59,
    chuchu: 1.79
};

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const totalCompra = calcularTotalCompra();
    valorTotal.textContent = `Valor Total: R$ ${totalCompra.toFixed(2)}`;
});

function calcularTotalCompra() {
    let total = 0;
    for (const produto in PRECOS) {
        const quantidade = parseInt(document.getElementById(produto).value);
        const preco = PRECOS[produto];
        total += quantidade * preco;
    }
    return total;
}
