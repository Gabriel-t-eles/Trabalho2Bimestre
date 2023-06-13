let gas = document.querySelector("#valor_Gasolina");
let die = document.querySelector("#valor_Diesel");
let eta = document.querySelector("#valor_Etanol");

let pagar = document.querySelector("#combustivel_Litros");
let botao = document.querySelector("#botao_combustivel");

function calcularGasolina() {
  let a = Number(gas.value);
  pagar.innerHTML = (a / 5.08).toFixed(2) + " LITROS(gasolina)";
  gas.value = ""
}
function calcularDiesel() {
  let b = Number(die.value);
  pagar.innerHTML = (b / 5.95).toFixed(2) + " LITROS(diesel)";
  die.value = ""
}
function calcularEtanol() {
  let c = Number(eta.value);
  pagar.innerHTML = (c / 3.79).toFixed(2) + " LITROS(etanol)";
  eta.value = ""
}
botao.onclick = function() {
  if (gas.value) {
    calcularGasolina();
  } else if (die.value) {
    calcularDiesel();
  } else if (eta.value) {
    calcularEtanol();
};
}