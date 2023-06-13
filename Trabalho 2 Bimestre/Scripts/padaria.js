let pao = document.querySelector("#Quantidade_de_Paos");
let resultado_Pao = document.querySelector("#valor_todal_Paos");
let broa = document.querySelector("#Quantidade_de_broas");
let resultado_broa = document.querySelector("#valor_todal_braos");
let calcular = document.querySelector("#botao_Calculo_Padaria");
let pao_e_broa = document.querySelector("#resultado_Total");
let poupanca = document.querySelector("#resultado_Poupanca");

function valor_Paos() {
  let x = Number(pao.value);
  let valorPaos = (x * 12) / 100;
  resultado_Pao.innerHTML = "= " + valorPaos + " REAIS";
  return valorPaos;
}

function valor_Broas() {
  let y = Number(broa.value);
  let valorBroas = (y * 150) / 100;
  resultado_broa.innerHTML = "= " + valorBroas + " REAIS";
  return valorBroas;
}

function valor_total() {
  let valorPaos = valor_Paos();
  let valorBroas = valor_Broas();
  let resultadoTotal = valorPaos + valorBroas;
  pao_e_broa.innerHTML = "Valor Total = " + resultadoTotal + " REAIS";
  return resultadoTotal;
}

function valor_Poupanca() {
  let resultadoTotal = valor_total();
  let poupancaValue = resultadoTotal * 0.1;
  poupanca.innerHTML = "Poupança = " + poupancaValue + " REAIS";
}

calcular.onclick = function () {
  valor_total();
  valor_Poupanca();
};