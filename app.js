let numeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial() {
    textoNaTela('h1', 'Jogo do numero secreto');
    textoNaTela('p', 'Escolha um numero de 1 a 10');
}
mensagemInicial();
function verificarChute() {
    // Eu tambem poderia por de pegar o elemento.. EX: getElementById('chute').value
    let chute = document.getElementById('chute').value
    if (chute != numeroSecreto) {
        textoNaTela('h1', 'Você errou 🙁' );
        if (chute > numeroSecreto) {
            textoNaTela('p','Dica: O numero é menor');
        }else {
            textoNaTela('p','Dica: O numero é maior');
        }
        tentativas++; 
        limparCampo() 
    }else {
        textoNaTela('h1','você acertou! 🥳🥳🥳');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`;
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    console.log(numeroSecreto)
}  
    function gerarNumeroAleatorio() {
    let numeroEscolhidos = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeElementosNaLista = numeroSorteados.length;
    if (quantidadeElementosNaLista == numeroLimite) {
        quantidadeElementosNaLista = [];
    }
    if (numeroSorteados.includes(numeroEscolhidos)) {
        return gerarNumeroAleatorio();
    } else {
        numeroSorteados.push(numeroEscolhidos)
        return numeroEscolhidos;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);

}