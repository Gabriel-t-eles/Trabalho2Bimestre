let num1 = document.querySelector("#num_Largura");
let num2 = document.querySelector("#num_Comprimento");
let enter = document.querySelector("#botao_Enter");
let resultado = document.querySelector("#resultado");

function calculo(){
    let a = Number(num1.value);
    let b = Number(num2.value);

    if(a === b){
        resultado.innerHTML = "Trabalhamos Apenas com Retangulos"
    }else if(a != b){
        resultado.innerHTML = a*b;
}
}
enter.onclick = function(){
    calculo();
}
