let cidade=prompt("Digite o nome da cidade");

const saoPauloeriodeJaneiro=400;
const riodeJaneirobeloHorizonte=500;
const beloHorizonteBrasilia=700;
const brasiliaSalvador=1000;
const hora=4;

switch(cidade){
case "São Paulo e Rio de Janeiro":
let carroLitro	=	saoPauloriodeJaneiro / 10;
let camiao =saoPauloriodeJaneiro / 4.5;
let velocidadeMedia=saoPauloriodeJaneiro / 4;
    console.log("O consumo de combustivel de carro pequeno"+carroLitro+"O consumo de camiao é"+camiao+"A velocidade Media é"+velocidadeMedia);
    
 case "RiodeJaneiro e Belo Horizonte":
let carroLitrobh	=	riodeJaneirobeloHorizonte / 10;
let camiaobh = riodeJaneirobeloHorizonte / 4.5;
let velocidadeMediabh=riodeJaneirobeloHorizonte / 4;
    console.log("O consumo de combustivel de carro pequeno"+  carroLitrobh +"O consumo de camiao é"+  camiaobh  +"A velocidade Media é"+  velocidadeMediabh);
    
    case "Belo Horizonte e Brasilia":
let carroLitrob	=beloHorizonteBrasilia	 / 10;
let camiaob = beloHorizonteBrasilia/ 4.5;
let velocidadeMediab=beloHorizonteBrasilia / 4;
    console.log("O consumo de combustivel de carro pequeno"+carroLitrob+"O consumo de camiao é"+camiaob+"A velocidade Media é"+velocidadeMediab);
    case "Brasilia e Salvador":
let carroLitros	=	 brasiliaSalvador / 10;
let camiaos =  brasiliaSalvador/ 4.5;
let velocidadeMedias= brasiliaSalvador / 4;
    console.log("O consumo de combustivel de carro pequeno"+carroLitros+"O consumo de camiao é"+camiaos+"A velocidade Media é"+velocidadeMedias);
    
    
    

}