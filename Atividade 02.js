//Atividade 2

let soma = 0
// Criação do loop while que continuara emquanto o usuario inserir um numero negattivo
while (true){
let numero = prompt("Insira um numero positivo")
// Verificação se o numero é negativo,se sim,sair do loop
if (numero < 0){
console.log("Programa encerado ,pois o usuario informou um valor negativo");
break;//parada forçada
}
//Verificação se o numero é par,se sim adicionar a soma
if (numero % 2=== 0){
soma=soma+numero;
//Outra forma de fazer :soma += numero;
}

}
console.log(`A soma dos numeros pares é:${soma}`);
//console.log("a soma é :" + soma);
