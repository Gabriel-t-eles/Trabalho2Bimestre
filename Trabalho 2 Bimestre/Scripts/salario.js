let valor_Salario_Atual = document.querySelector("#valor_Salario_Atual");
let botao = document.querySelector("#calculo_Salario");
let salario_Atual = document.querySelector("#salario_Atual");
let salario_Aumento = document.querySelector("#salario_Aumento");
let salario_Final = document.querySelector("#salario_Final")

function salario(){
    let a = Number(valor_Salario_Atual.value);
    let aumento = (15/100) * a;
    let final = (8/100) * a;

    salario_Atual.innerHTML = "R$ " + a.toFixed(2);
    salario_Aumento.innerHTML = "R$ " + (aumento + a).toFixed(2);
    salario_Final.innerHTML = "R$ " + (a - final).toFixed(2);
    valor_Salario_Atual.value = " "
}
botao.onclick = function(){
    salario();
}