//Declaração das Variaveis de Quantidade que cada um vai comprar

let botaoCalcular = document.getElementById('btnCalcular');
function enviarDados() {
  const nome = document.getElementById('nome').value;
  const carneBoi = parseFloat(document.getElementById('carneBoi').value);
  const carneFrango = parseFloat(document.getElementById('carneFrango').value);
  const linguica = parseFloat(document.getElementById('linguica').value);
  const diaSemana = parseInt(document.getElementById('diaSemana').value);
  const carnePorco = parseFloat(document.getElementById('carneporco').value);
return  aplicarDesconto(calcularvalorTotal(carneBoi, carneFrango, linguica, carnePorco), diaSemana);

};



function calcularvalorTotal(qtdCarne, qtdFrango, qtdLinguica, qtdPorco) {
  const precocarnekg = 25;
  const precofrangokg = 15;
  const precolinguicakg = 20;
  const precocarneporco = 30;
  const valorTotal = (precocarnekg * qtdCarne) + (precofrangokg * qtdFrango) + (precolinguicakg * qtdLinguica) + (precocarneporco * qtdPorco);
  return valorTotal;
}

//Joao
function aplicarDesconto(valorTotal, diaDaSemana) {

  //  const diaDaSemana = new Date().getDay(); // 0 para domingo, 1 para segunda-feira, etc.
  if (diaDaSemana === 3) {  // 3 representa quarta-feira
    // Aplica desconto de 10%

    return alert("O valor Total a pagar da  é " + valorTotal * 0.9 + "Com Desconto");
  } else {
    return alert("O valor Total a pagar da  é " + valorTotal + ". Sem desconto!");
  }

}
botaoCalcular.addEventListener('click',enviarDados);
//Fdocument.getElementById('resultado').innerText = resultado;





