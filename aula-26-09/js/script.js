var target = document.getElementById("ref1");

if(target != null) {
    window.alert(
        "Nome do nó: " + target.nodeName + "\n" +
        "HTML dentro do Nó: " + target.innerHTML+"\n"+
        "Id: " + target.id+ "\n" +
        "Tem filho?: "+ target.hasChildNodes()
    );
   
}else{
    window.alert("Elemento não encontrado!");
}