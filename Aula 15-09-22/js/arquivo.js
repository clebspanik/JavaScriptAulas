//Classse document

document.write("Bom dia Chapeco");

//title - Retorna ao título da página
//URL - Retorna a URL da página
document.write("<h2>"+document.title+"</h2>");
//document.write (document.URL);

//Requisitando informações do HTML e alterando-as
function fAlterar(){
    var x = document.getElementById("paragrafo");
    x.innerHTML ="Bom dia";
}

function inter(){
    var btnNome = document.getElementById("btnInter");
    var lampada = Element=document.getElementById("imgLamp");
    if (Element.src.match("bulbon")){
        Element.src="img/bulboff.png";
        btnNome.innerHTML = "Ligar"
}else{

    Element.src="img/bulbon.png";
    btnNome.innerHTML = "Desligar"
    }   


}

function soma(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 + n2);
}

function sub(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 - n2);
}

function mult (){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 * n2);
}

function div (){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1/n2);
}

function porcent (){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1*(n2/100));
}

function Limpa (){
    var n1 = document.getElementById("v1");
    var n2 = document.getElementById("v2");
    var r = document.getElementById("res");
    n1.value="";
    n2.value="";
    innerHTML = "Resposta: ";
}