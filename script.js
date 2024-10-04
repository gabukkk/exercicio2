function iniciarContagemRegressiva() {
  let numero = parseInt(document.getElementById("numeroRegressiva").value);
  let resultado = [];
  for (let i = numero; i >= 0; i--) {
    resultado.push(i);
  }
  document.getElementById("resultadoRegressiva").innerHTML = resultado.join(" ");
}

function mostrarTabuada() {
  let numero = parseInt(document.getElementById("numeroTabuada").value);
  let resultado = "";
  if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
  } else {
    resultado = "Insira um número entre 1 e 10!";
  }
  document.getElementById("resultadoTabuada").innerHTML = resultado;
}

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();

function adivinhar() {
  let tentativa = parseInt(document.getElementById("numeroJogo").value);
  let resultado = "";
  if (isNaN(tentativa)) {
    resultado = "Por favor, insira um número válido!";
  } else if (tentativa === numeroSecreto) {
    resultado = "Parabéns! Você acertou!";
  } else if (tentativa > numeroSecreto) {
    resultado = `Tente novamente! O número secreto é menor que ${tentativa}.`;
  } else {
    resultado = `Tente novamente! O número secreto é maior que ${tentativa}.`;
  }
  document.getElementById("resultadoJogo").innerHTML = resultado;
}

function gerarNovoNumero() {
  numeroSecreto = gerarNumeroAleatorio();
  document.getElementById("resultadoJogo").innerHTML = "Novo número gerado. Tente adivinhar.";
  document.getElementById("numeroJogo").value = ""; 
}
