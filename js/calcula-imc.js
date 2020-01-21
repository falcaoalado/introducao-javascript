// Pego o primeiro elemento <a> com o atributo target
var teste = document.querySelector("a[target]");
console.log(teste);

//querySelectorAll -> busca todos
var pacientes = document.querySelectorAll(".paciente");

for (var contador = 0 ; contador < pacientes.length ; contador++) {

  var paciente = pacientes[contador];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  var isPesoValido = validaPeso(peso);
  var isAlturaValida = validaAltura(altura);

  var mensagemErro = "";

  if (!isPesoValido) {
    mensagemErro += "[Peso inválido]";
  }

  if (!isAlturaValida) {
    mensagemErro += "[Altura inválida]";
  }

  if (isPesoValido && isAlturaValida) {
      tdIMC.textContent = calculaImc(peso, altura);
  } else {
      tdIMC.textContent = mensagemErro;
      //Pego a lista de classes e adiciono uma nova classe css
      paciente.classList.add("paciente-invalido");
      //O jeito correto de alterar estilos seria o acima, onde adicionamos aos estilos um novo que desejamos, porém...
      //paciente.style.backgroundColor = "red" -> poderíamos alterar dessa forma, apesar de não ser correto.
  }

}

function validaPeso(peso) {
    if ((peso >= 0) && (peso < 1000)) {
        return true;
    }
}

function validaAltura(altura) {
    if ((altura < 3.0) && (altura >= 0)) {
        return true;
    }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
