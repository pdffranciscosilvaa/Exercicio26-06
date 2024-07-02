function converter() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (isNaN(fahrenheit)) {
        alert("Erro: Valor inválido!");
        return;
    }

    const celsius = (fahrenheit - 32) * 5 / 9;

    document.getElementById('resultado').innerHTML = `
        <p>A temperatura em Celsius é: ${celsius.toFixed(2)}°C</p>
    `;
}
