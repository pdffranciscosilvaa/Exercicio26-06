const formulario = document.getElementById('formulario');
const resultado5 = document.getElementById('resultado5');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

    const podeVotar = verificarIdade(idade);
    const mensagemTexto = gerarMensagem(nome, idade, podeVotar);
    mensagem.textContent = mensagemTexto;
});

function verificarIdade(idade) {
    const idadeMinima = 18;
    return idade >= idadeMinima;
}

function gerarMensagem(nome, idade, podeVotar) {
    const textoBase = `${nome}, com ${idade} anos, `;
    if (podeVotar) {
        return textoBase + "pode votar.";
    } else {
        return textoBase + "não pode votar.";
    }
}
