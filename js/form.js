var button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", function(event){
  //Previne seu comportamento padrão
  event.preventDefault();
  console.log("Olá, fui clicado!");
    
  limpaErros();

  var form = document.querySelector("#adiciona-paciente");

  var paciente = obtemPacienteDoFormulario(form);
    
  adicionaPacienteNaTabela(paciente);

  form.reset();
});

function adicionaPacienteNaTabela(paciente) {
    
    var erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        montaMensagemErro(erros);
        return;
    }
    
    var pacienteTr = montaTr(paciente);
    var tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {

  var paciente = {
    nome    : form.nome.value,
    peso    : form.peso.value,
    altura  : form.altura.value,
    gordura : form.gordura.value,
    imc   : calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente) {
  //createElement cria elementos
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd    = montaTd(paciente.nome, "info-nome");
  var pesoTd    = montaTd(paciente.peso, "info-peso");
  var alturaTd  = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd     = montaTd(paciente.imc, "info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
    
    var erros = [];
    
    if (!validaPeso(paciente.peso) || isVazio(paciente.peso)) {
        erros.push("Peso inválido");
    }
    
    if (!validaAltura(paciente.altura) || isVazio(paciente.altura)) {
        erros.push("Altura inválida");
    }
    
    if (isVazio(paciente.nome)) {
        erros.push("Nome em branco");
    }
    
    if (isVazio(paciente.gordura)) {
        erros.push("Gordura em branco");
    }
    
    return erros;
}

function isVazio(dado) {
    return dado.length == 0;
}

function montaMensagemErro(erros) {
    
    var ulErro = document.querySelector("#mensagem-erro");
    
    //Função forEach no JS
    erros.forEach(function(erro) {
       var li = document.createElement("li");
        li.textContent = erro;
        
        ulErro.appendChild(li); 
    });
}

function limpaErros() {
    document.querySelector("#mensagem-erro").innerHTML = '';
}