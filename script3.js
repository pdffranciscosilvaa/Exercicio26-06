function calcularVolumeProducao() {
    const raio = parseFloat(document.getElementById('raio').value);
    const alturaFrasco = parseFloat(document.getElementById('altura').value);
    const frascosPorHora = parseFloat(document.getElementById('frascosPorHora').value);
    const horasPorDia = parseFloat(document.getElementById('horasPorDia').value);
    const diasPorMes = parseFloat(document.getElementById('diasPorMes').value);

    if (isNaN(raio) || isNaN(alturaFrasco) || isNaN(frascosPorHora) || isNaN(horasPorDia) || isNaN(diasPorMes)) {
        alert("Erro: Valores inválidos!");
        return;
    }

    const volumeFrasco = Math.PI * raio * raio * alturaFrasco;
    const volumeProducaoPorHora = frascosPorHora * volumeFrasco;
    const volumeProducaoPorDia = volumeProducaoPorHora * horasPorDia;
    const volumeProducaoTotal = volumeProducaoPorDia * diasPorMes;

    document.getElementById('resultado').innerHTML = `
        <p>O volume total de detergente a ser produzido no mês é: ${volumeProducaoTotal.toFixed(2)} cm³.</p>
    `;
}
