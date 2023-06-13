let numero = document.querySelector("#numeros_input");
let botao = document.querySelector("#botao_numero");
let centenas = document.querySelector("#texto_Centanas");
let dezenas = document.querySelector("#texto_Dezenas");
let unidade = document.querySelector("#texto_Unidades");

function separa_numero(){
    let a = Number(numero.value);

    let cem = Math.floor(a/100);
    let dez = Math.floor((a % 100) / 10);
    let uni = Math.floor(((a % 100) % 10));
    
    centenas.innerHTML = cem + " Centenas"; 
    dezenas.innerHTML = dez + " Dezenas";
    unidade.innerHTML = uni + " Unidades"; 
}

botao.onclick = function(){
    separa_numero();
}