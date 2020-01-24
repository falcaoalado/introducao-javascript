var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
   
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {
        pacientes.forEach(function(paciente) {

            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(campoFiltro.value, "i");

            //if (!nome.includes(campoFiltro.value)) {
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        });
    }
    
});