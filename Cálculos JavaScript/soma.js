function soma(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var soma = a + b;
    document.getElementById("resultado").innerHTML = "Resultado = " + soma;
    //alert(soma);
}

function soma2(){
    var a = parseInt(prompt("Informe um numero"));
    var b = parseInt(prompt("Informe outro numero"));
    var soma2 = a+b;
    alert("soma = " + soma2)
}

function Ex1(){
    var a = parseInt(prompt("Informe o 1º número"));
    var b = parseInt(prompt("Informe o 2º número"));
    var c = parseInt(prompt("Informe o 3º número"));
    
    if( a > b && a >c){
        alert("o maior número é o : " + a);
    } else if( b > a && b >c){
        alert("o maior número é o : " + b);
    }else{
        alert("o maior número é o : " + c);
    }

}

function Ex2(){
    var idade = parseInt(prompt("Informe sua idade:"));

    
    if( idade >= 18){
        alert("Você é maior de idade");

    }else{
        alert("Você é menor de idade");
    }

}

function Ex3(){
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc1 = peso/(altura * altura);
    var IMC = imc1.toFixed(2)
    document.getElementById("ResultIMC").innerHTML = "Resultado = " + IMC;
    

}

