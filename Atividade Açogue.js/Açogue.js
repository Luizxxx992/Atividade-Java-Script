//Declaração das Variaveis de Quantidade que cada um vai comprar
const carneJoao=2;
const frangoJoao=1;
const linguicaJoao=1;
const porcoJoao=0;

const carneMaria=3;
const frangoMaria=2;
const linguicaMaria=1;
const porcoMaria=4;




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



