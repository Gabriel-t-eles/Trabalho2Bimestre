let numCavalo = document.querySelector("#quantidade_Cavalos");
let numFerraduras = document.querySelector("#resultado_quantidade_Ferraduras");
let botaoCalculo = document.querySelector("#calculo_Ferraduras");

function quantidade(){
    let cavalos = Number(numCavalo.value);
    numFerraduras.innerHTML = (cavalos * 4) + " FERRADURAS";
}
botaoCalculo.onclick = function(){
    quantidade();
}