let tempo = document.querySelector("#tempo_Sem_Acidentes");
let botao = document.querySelector("#botao_acidente");
let resultado_ano = document.querySelector("#resultado_acidentes_anos");
let resultado_mes = document.querySelector("#resultado_acidentes_mes");
let resultado_dia = document.querySelector("#resultado_acidentes_dias");

function tempoSemAcidetes(){
    let a = Number(tempo.value);
   
   
    let ano = Math.floor(a / 8760); 
    let mes = Math.floor((a % 8760) / 720); 
    let dia = Math.floor(((a % 8760) % 720) / 24);
    
    
    resultado_ano.innerHTML = ano + " Anos";
    resultado_mes.innerHTML = mes + " Mês";
    resultado_dia.innerHTML = dia + " Dias";
    tempo.value = " "
}

botao.onclick = function(){
    tempoSemAcidetes();
}