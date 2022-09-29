/*
//Instrução andar 5 passos para Norte
var passo;
for (passo = 0; passo < 5; passo++) {
    //Executa 5 vezes
    console.log('Ande um passo para o Norte!')
}

//Sintaxe será:
for([inincialização];[condição];[expressão]){
    declaração; 
}
*/
function howMany(selectObject) {
    var numeroSelecionadas = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numeroSelecionadas++;
      }
    }
    return numeroSelecionadas;
  }
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert('Total de opções selecionadas: ' + howMany(document.selectForm.tipoMusica))
  });

//Do...While Executa a declaração até que a condição for falsa
//Sintaxe
//do
//[Declaração]
//while([condição])
//Primeiro executa o loop depois faz a verificação
var resultado = '';
var i = 0;
do{
    i+= 2;
    resultado += i + ' ';
}while( i < 5);
document.getElementById("exemplo").innerHTML = resultado;

//While => loop até 10
contar = 1;
while(contar <=10){
    contar ++;
}

//ForEach => Executar uma função em cada elemento de um array
numeros: [1,2,3,4,5,6,7,8,9];
i=0;
numeros.array.forEach(numeros => {
    i++;
});

//Break - encerra  o Loop atual, ou o loop que foi informado na label 
//Sintax - break; ou a break[label];
//EX break: O break na função irá encerrar o loop while
function testeBreak(){
    var i = 0;
    while(i < 5){
        if(i==3){
            break;
        }
        i +=1;
    }
    return i * x;
}

//switch - Avalia uma expressão combinando o valor dela com uma cláusula case, quando igual executa 
//a instrução da case
//Sintaxe 
switch (expr){
    case "Laranja":
        console.log("R$ 4.99 KG")
        break;
    case "Maça":
        console.log("R$5.99");
        break;
    case "Banana":
        console.log("R$3.99");
        break;
    case "Maracuja":
         console.log("R$8.99");
        break;
    case "Ppaia":
        console.log("R$4.99");
        break;
    default:
        console.log("Desculpe estamos sem estoque de:" + exprf);
                

}