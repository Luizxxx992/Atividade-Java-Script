document.getElementById('compraForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
const nome = document.getElementById('nome').value;
const carneJoao=parseFloat(document.getElementById('carneBoi').value);
const frangoJoao=parseFloat(document.getElementById('carneFrango').value);
const linguicaJoao=parseFloat(document.getElementById('linguica').value);
const porcoJoao=parseFloat(document.getElementById('carneporco').value);
const diaDaSemana=parseFloat(document.getElementById('diaDaSemana').value);

document.getElementById('resultado').innerText = resultado;

});

  function calcularvalorTotal(qtdCarne,qtdFrango,qtdLinguica,qtdPorco)
  {
  const precocarnekg=25;
const precofrangokg=15;
const precolinguicakg=20;
const precocarneporco=30;
  const valorTotal= (precocarnekg*qtdCarne)+(precofrangokg*qtdFrango)+(precolinguicakg*qtdLinguica)+(precocarneporco*qtdPorco);
 return valorTotal; 
  }

//Joao
function aplicarDesconto(valorTotal) {
const diaDaSemana=3;

//  const diaDaSemana = new Date().getDay(); // 0 para domingo, 1 para segunda-feira, etc.
  if (diaDaSemana === 3) {  // 3 representa quarta-feira
    return valorTotal * 0.9;  // Aplica desconto de 10%
  } else {
    return valorTotal; // Sem desconto
  }
}


console.log("O valor total Joao sem desconto:"+ calcularvalorTotal(carneJoao,frangoJoao,linguicaJoao,porcoJoao));
console.log("O valor Total a pagar da jõao é " + aplicarDesconto(calcularvalorTotal(carneJoao,frangoJoao,linguicaJoao,porcoJoao)));
console.log("-------------------------------------------------------------------------------------------");

console.log("O valor Total a pagar da Maria é " + aplicarDesconto(calcularvalorTotal(carneJoao,frangoJoao,linguicaJoao,porcoJoao)));
console.log("O valor Total maria sem desconto:"+ aplicarDesconto(calcularvalorTotal(carneMaria,frangoMaria,linguicaMaria,porcoMaria)));


