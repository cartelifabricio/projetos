

/* Exercicio 1
var nome = "Fabricio Carteli";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos ");

//alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
*/

/* Exercicio 2
var lista = ["maca", "pera", "laranja"] ;
lista.push("uva");


console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/* Exercicio 3
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/* Exercicio 4
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor: "roxo"}]
console.log(fruta);
alert(fruta[1].nome);
*/

/* Exercicio 5
var idade = prompt("Qual sua idade?");

if (idade >=18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/  

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}


var d = new Date ();
alert (d.getMonth()+1);
*/

/*
function soma(n1,n2);{
return n1 + n2;
}


function validaidade(idade){
    if (idade >= 18) {
    validar = true
    }else{
        validr = false
    }
    return validar;
        
    }


var idade = prompt ("Qual a sua idade?");
validaidade(idade);
console.log(validar);

*/

/*
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar");
}
*/


let total = 0;
let i = 0;
let valor;


while (i< 6){ 
  valor = parseFloat(gets());

if (valor > 1){
  total = total + 1;
}

 i = i + 1;

}

console.log(total + " valores positivos");