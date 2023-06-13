let camiseta_G = document.querySelector("#camiseta_G");
let camiseta_M = document.querySelector("#camiseta_M");
let camiseta_P = document.querySelector("#camiseta_P");

let botao = document.querySelector("#botao");
let valor_A_Pagar = document.querySelector("#valor_A_Pagar");

function camisetas(){
    let g = Number(camiseta_G.value);
    let m = Number(camiseta_M.value);
    let p = Number(camiseta_P.value);

    let a = (15 * g); 
    let b = (12 * m);
    let c = (10 * p);

    valor_A_Pagar.innerHTML = "R$ " + (a + b + c).toFixed(2) + " Valor a Pagar";
    camiseta_G.value = " "
    camiseta_M.value = " "
    camiseta_P.value = " "
}

botao.onclick = function(){
    camisetas();
}