let listaDeNumeroVariados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    
exibirTextoNaTela('h1', 'Jogo do Tenta Acertar o Número Bobão');
exibirTextoNaTela('p', 'Escolhe um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou Mizeráviiii');
        let tentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Inteligente demais da conta uai, você só precisou de ${tentativas} ${tentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor mané');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior zé');

    } tentativas++;
      limparCampo();

}}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroVariados.length;

   if(quantidadeDeElementosNaLista == numeroLimite);{
   listaDeNumeroVariados = [];
   }

   if(listaDeNumeroVariados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else {
    listaDeNumeroVariados.push(numeroEscolhido);
    return numeroEscolhido;
   }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled', true);
}