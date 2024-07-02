const formulario = document.getElementById("formulario");
const ladoBaseInput = document.getElementById("ladoBase");
const resultadoDiv = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const ladoBase = parseFloat(ladoBaseInput.value);

    if (isNaN(ladoBase) || ladoBase <= 0) {
    resultadoDiv.textContent = "Erro: O lado da base deve ser um número positivo.";
    return;
  }

  const areaBase = Math.pow(ladoBase, 2);
  resultadoDiv.textContent = `A área da base da pirâmide quadrada é: ${areaBase.toFixed(2)}`;
});