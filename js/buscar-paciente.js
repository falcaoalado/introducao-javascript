var busca = document.querySelector("#buscar-pacientes");

busca.addEventListener("click", function(){
    
    document.querySelector("#erro-ajax").classList.add("invisivel");
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function() {
        
        if (xhr.status == 200) {
            var resposta = this.responseText;   
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
               adicionaPacienteNaTabela(paciente); 
            });
        } else {
            console.log("Erro na requisição: [" + xhr.status + "]");
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
        
    });
    
    xhr.send();
});