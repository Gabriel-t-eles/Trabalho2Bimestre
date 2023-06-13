let valor = document.querySelector("#valor");


function divisao(){
    let num = Number(valor.value);
    let a = num % 3;
    let b = num - a;
    let c = b / 3;

    resultado1.innerHTML = "Parte de Carolos " + c;
    resultado2.innerHTML = "Parte de André " + c;
    resultado3.innerHTML = "Parte de Felipe " + (c + a);


}

botao.onclick = function(){
    divisao();
}