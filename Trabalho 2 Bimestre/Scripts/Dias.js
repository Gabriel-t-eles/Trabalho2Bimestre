let nome = document.querySelector("#adicionar_Nome");
let idd = document.querySelector("#adicionar_Idd");
let botao = document.querySelector("#botao_idd");

let alterar_nome= document.querySelector("#alterar_Nome");
let anos = document.querySelector("#adicionar_Anos"); 
let mes = document.querySelector("#adicionar_Mes");
let semanas = document.querySelector("#adicionar_Semanas");
let dias = document.querySelector("#adicionar_Dias");
let horas = document.querySelector("#adicionar_Horas");

function alteracao (){
    a = Number(idd.value);
    anos.innerHTML = a;
    mes.innerHTML = a * 12;
    semanas.innerHTML = a * 52;
    dias.innerHTML = a * 365;
    horas.innerHTML = a * 8766;

    
}

function exibir_Nome(){
    let b = String(nome.value)
    alterar_nome.innerHTML= b
}

botao.onclick = function(){
    alteracao();
    exibir_Nome();
}
