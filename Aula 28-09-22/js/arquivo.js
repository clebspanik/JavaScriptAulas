//exemplo FOR - estrutura de repetição - ("for" verifica para validar)

//Delcaração FOR ([expressão inicial]); [condição]; [incremento])

var passo;

for (passo= 0; passo <5; passo++){
    console.log('Ande um passo');
}
function howMany (selectObject) {
    var nroSelecoes = 0;
    for(var i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected){
            nroSelecoes++;
        }
    }
    return nroSelecoes;

}
var btn = document.getElementById ('btn');
btn.addEventListener("click",function(){
    alert('Total Selecionadaos: '+ howMany(document.selectForm.tipoMusica));});

    /* do...while do star while (condição)*/
    //while = laço - verificação

    var resultado = '';
    var i = 0;

    do{
        i+=2;
        resultado += 1+ ' ';
    } while(i<15);
    document.getElementById('exemplo').innerHTML = resultado;

    //elementos de repetição com funcionalidade semelhante e suas diferenças

    //while  - executa o loop enquanto a condição for verdadeira
    //ex contar de 1 a 10

    contagem = 0;
    var i = 0;
    while(contar <= 10){
        i++;
    }

    //do while - executa o loop primeiro e depois veriica a condição;

    do {
        contagem++;
    } while (contagem <= 10);

    //For - executa o loop enquanto a condição for verdadeira
    // porém a instância das variáveis de contagem são instanciadas na estrutura do loop

    contagem = 0;
    var i = 0;
    for (i = 0; i  <=10; i++){
        contagem ++;
    }

    //ForEach - executa o loop sobre elementos de um array
    contagem = [0,1,2,3,4,5,6,7,8,9];
    i=0;
    contagem.forEach(contagem=> {
        i++;
    });

    //Break - Encerra o loop atual
    //sintaxe break [label]; - break;
    //ex.:
    function testabreak (x){
        var i = 0;
        while(i < 6){
            if(i==3){
                break;
            }
            i+= 1;
        }
        return i * x;
    }

    //a condicional switch avalia uma exprssão, combinando o valor da expressão com uma "cláusula case"
    //executa os comandos associados com o case

    switch (expr) {
        case "Laranjas":
            console.log ("Laranjas R$ 4,99 Kg");
            break;
        case "Laranjas":
            console.log ("Laranjas R$ 4,99 Kg");
            break;
        case "Laranjas":
                console.log ("Laranjas R$ 4,99 Kg");
            break;

        case "Laranjas":
            console.log ("Laranjas R$ 4,99 Kg");
            break;

        case "Laranjas":
            console.log ("Laranjas R$ 4,99 Kg");
            break;
            
        case "Laranjas":
            console.log ("Laranjas R$ 4,99 Kg");
            break;
            
        case "Laranjas":
            console.log ("Laranjas R$ 4,99 Kg");
            break;
        default:
            console.log ("Desculpe, estamos sem nenhuma "+ expr +" . ")
    }
    console.log ("Gostaria de adicionar mais algo?");