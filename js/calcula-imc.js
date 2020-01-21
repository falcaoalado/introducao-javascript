// Pego o primeiro elemento que seja h1 e guardo numa variável
var titulo = document.querySelector("h1");
// Altero o value da primeira tag h1
titulo.textContent = "orkut";

// Altero o value do primeiro elemento title
document.querySelector("title").textContent = "Caguei bolinha preta!";

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

  var isPesoValido = true;
  var isAlturaValida = true;

  var mensagemErro = "";

  if ((peso < 0) || (peso > 1000)) {
    isPesoValido = false;
    mensagemErro += "[Peso inválido]";
  }

  if ((altura < 0) || (altura > 3.0)) {
    isAlturaValida = false;
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

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
