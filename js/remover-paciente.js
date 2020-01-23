/*
Da forma comentada seria adicionando a cada filho um evento, entretanto além de quando se adicionasse um novo li teria que se adicionar o evento, seria mais custoso visto que haveriam diversos eventos a tal filho.

Da forma descomentada estamos nos aproveitando do event bubbling, onde ao adicionar um listener no pai (nesse caso o tbody), conseguimos pegar qualquer evento nos filhos.

Precisamos passar o event dentro da function, pegar o seu target e apontar para o pai
*/
var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event) {
    var alvo = event.target;
    var paiDoAlvo = alvo.parentNode;
    
    paiDoAlvo.remove();
});

/*
//Carregando todos os pacientes da página
var pacientes = document.querySelectorAll(".paciente");


//Utilizando o forEach para adicionar evento de click para todos os pacientes
pacientes.forEach(function(paciente){
    
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
});*/