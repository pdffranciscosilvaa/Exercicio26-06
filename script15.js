const formulario = document.getElementById('formulario');
        const resultado = document.getElementById('resultado');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const tipoCombustivel = document.getElementById('tipoCombustivel').value;
            const litros = parseFloat(document.getElementById('litros').value);

            const precoPorLitro = tipoCombustivel === 'A' ? 0.9 : 1.2; // Preço base por litro
            let desconto = 0; // Variável para armazenar o valor do desconto

            if (litros <= 20) {
                desconto = tipoCombustivel === 'A' ? 2 : 3;
            } else {
                desconto = tipoCombustivel === 'A' ? 4 : 5;
            }

            const precoTotal = litros * precoPorLitro;
            const descontoEmReais = precoTotal * (desconto / 100);
            const precoFinal = precoTotal - descontoEmReais;

            resultado.innerHTML = `
                <p>Combustível: ${tipoCombustivel}</p>
                <p>Litros: ${litros.toFixed(2)}</p>
                <p>Preço por Litro: R$ ${precoPorLitro.toFixed(2)}</p>
                <p>Desconto: ${desconto}% (R$ ${descontoEmReais.toFixed(2)})</p>
                <p>Preço Final: R$ ${precoFinal.toFixed(2)}</p>
            `;
        });