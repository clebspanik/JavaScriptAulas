/*["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"]

[33, "Segunda", true, 1.76, null];

{
    "Ana"  {"idade":34,"dependentes":true, "altura":1.80},
    "João" {"idade":4,"dependentes":false , "altura": 1.22},
    "Maria"{"idade":32,"dependentes":true, "altura": 1.64},
    "Joana"{"idade":22,"dependentes":false, "altura": 1.53},
    "Pedro"{"idade":44,"dependentes":true, "altura": 1.96},
    "Julio"{"idade":64,"dependentes":true, "altura": 1.77};
}
*/

const jsonData= '{"Equipe"}: ['+
    '{"Nome":"João", "Cargo":"Manobrista", "idade":21}'+
    '{"Nome":"Joana", "Cargo":"Atendente", "idade":49}'+
    '{"Nome":"Maria", "Cargo":"Financeiro", "idade":41}'+
    '{"Nome":"Pedro", "Cargo":"Telefonista", "idade":26}'+
    '{"Nome":"Julia", "Cargo":"Gerente", "idade":19}]}';

    var jsonObj= JSON.parse(jsonData);
    console.log(jsonObj.Equipe[0]);
    document.getElementById("Nome").innerHTML='<h2>'+jsonObj.Equipe[0].Nome+'</h2>';
