function calcular() {
    const custoKg = parseFloat(document.getElementById('custoKg').value);
    const tempoVenda = parseFloat(document.getElementById('tempoVenda').value);
    const vendas = parseFloat(document.getElementById('vendas').value);
    const pesosString = document.getElementById('pesos').value;
    const pesos = pesosString.split(',').map(parseFloat);

    if (isNaN(custoKg) || isNaN(tempoVenda) || isNaN(vendas) || pesos.some(isNaN)) {
        alert("Erro: Valores inválidos!");
        return;
    }

    // Calcula a média de peso vendido por refeição
    const pesoMedio = pesos.reduce((soma, peso) => soma + peso, 0) / vendas;

    // Calcula a quantidade de refeições vendidas em 3 horas
    const refeiçoes3Horas = (3 * 60) / tempoVenda;

    // Calcula a receita estimada em 3 horas
    const receita3Horas = refeiçoes3Horas * pesoMedio * custoKg;

    // Calcula a quantidade de dias úteis no mês (considerando 22 dias)
    const diasUteis = 22;

    // Calcula a quantidade de refeições vendidas no mês
    const refeiçoesMes = diasUteis * refeiçoes3Horas;

    // Calcula a receita estimada no mês
    const receitaMes = refeiçoesMes * pesoMedio * custoKg;

    // Calcula o peso total vendido no mês
    const pesoTotalMes = refeiçoesMes * pesoMedio;

    document.getElementById('resultado').innerHTML = `
        <p>**Média de peso vendido por refeição:** ${pesoMedio.toFixed(2)} kg</p>
        <p>**Receita estimada em 3 horas:** R$ ${receita3Horas.toFixed(2)}</p>
        <p>**Receita estimada no mês:** R$ ${receitaMes.toFixed(2)}</p>
        <p>**Peso total vendido no mês:** ${pesoTotalMes.toFixed(2)} kg</p>
    `;
}
