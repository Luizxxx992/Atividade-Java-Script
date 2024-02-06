//Id do botão calcular presente no html*/
let botaoCalcular = document.getElementById('btnCalcular');
//Função do Java Script para calcular o imc*/
function calculandoIMC() {
    //Variaveis para o usuario inserir o peso do tipo valor, com id do html das funções presente na pagina */
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultado = document.getElementById("resultado");
    let idade = document.getElementById("idade");

    //Estrutura Condicional ,se altura e peso for diferente de texto vazio  entao ele ira fazer as comparações*/
    if (altura !== "" || peso !== "" || altura < 2 || idade !== "") {
        //Variavel com a formula para realizar o calculo do imc*/
        let imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";

        if (imc < 18.5) {
            mensagem = "Abaixo do peso!"
        } else if (imc < 25) {
            mensagem = "Você está com o peso ideal!"
        } else if (imc < 30) {
            mensagem = "Você está levemente acima do peso!"
        } else if (imc < 35) {
            mensagem = "Cuidado voçe so tem! Obesidade grau I"
        } else if (imc < 40) {
            mensagem = "Cuidado! Obesidade grau II"
        } else {
            mensagem = "Cuidado! Obesidade grau III"
        }
        //Função para aparecer o resultado na tela junto a frase "Seu imc é" e a mensagem*/
        resultado.textContent = `Seu IMC é ${imc}. ${mensagem} - Com idade de: ${idade}`;

    } else {
        resultado.textContent = "Preencha todos os campos!!!"
    }

}
//
botaoCalcular.addEventListener('click', calculandoIMC);

