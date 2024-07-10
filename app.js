// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;
console.log(numeroSecreto)

// funcão com parametro

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1','Jogo do número secreto');
  exibirTextoNaTela('p','Escolha um número entre 1 e 100');
  
}

exibirMensagemInicial()


function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`; 
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto){
       
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);      
    } else {
      exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    tentativas++;

    limparCampo();

    
}
// funcão sem retorno e sem parametro 
// funcão com retorno 
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100 + 1);
}

// limpar campo
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);

}