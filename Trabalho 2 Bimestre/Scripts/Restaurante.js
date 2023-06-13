let kQ  = document.querySelector("#kq_Valor");
let botao = document.querySelector("#botao");
let total_Pagar  = document.querySelector("#valor_Pagar");

function valor_Kg(){
    let peso = Number(kQ.value);

    total_Pagar.innerHTML = "R$ " + (peso * 12).toFixed(2) + "  Por Kg";
    kQ.value = " "
}

botao.onclick = function(){
    valor_Kg();
}