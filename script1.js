function calcularAreaBase() {
    const ladoBase = parseFloat(document.getElementById('ladoBase').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(ladoBase) || isNaN(altura)) {
        alert("Erro: Valores inválidos!");
        return;
    }

    const areaBase = (ladoBase * altura) / 2;

    document.getElementById('resultado1').innerHTML = `
        <p>A área da base da pirâmide triangular é: ${areaBase.toFixed(2)} unidades quadradas.</p>
    `;
}
