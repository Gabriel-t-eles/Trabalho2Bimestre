let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcularDias() {
    a = Number(dia.value);
    b = Number(mes.value);

    let diasPassados = (b - 1) * 30 + a;
    resultado.innerHTML= "Dias passados desde o início do ano: " + diasPassados;
    dia.value = " "
    mes.value = " "
}

calcular.onclick = function(){
    calcularDias();
}