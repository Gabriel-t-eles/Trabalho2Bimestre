let a_X = document.querySelector("#input_A_X");
let a_Y = document.querySelector("#input_A_Y");
let b_X = document.querySelector("#input_B_X");
let b_Y = document.querySelector("#input_B_Y");

let botao = document.querySelector("#botao");
let resultado  = document.querySelector("#valor_Calculo");

function pontos(){
    let ponto_AX = Number(a_X.value);
    let ponto_AY = Number(a_Y.value);
    let ponto_BX = Number(b_X.value);
    let ponto_BY = Number(b_Y.value);

    let a = (ponto_BX - ponto_AX) * (ponto_BX - ponto_AX);
    let b = (ponto_BY - ponto_AY) * (ponto_BY - ponto_AY);

    resultado.innerHTML = "Distância AB = " + Math.sqrt(a + b).toFixed(3);
    a_X.value = " "
    a_Y.value = " "
    b_X.value = " "
    b_Y.value = " "
}

botao.onclick = function(){
    pontos();
}