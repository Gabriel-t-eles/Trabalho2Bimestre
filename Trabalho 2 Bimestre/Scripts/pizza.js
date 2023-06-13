let medida_Pizza = document.querySelector("#medida_Pizza");
let botao = document.querySelector("#botao");
let calculo_Area = document.querySelector("#calculo_Area");

function calcular(){
    let pizza = Number(medida_Pizza.value);
    let area = pizza * pizza * 3.14;
    calculo_Area.innerHTML = "A Área da pizza é " + area.toFixed(2);
}

botao.onclick = function(){
    calcular();
}