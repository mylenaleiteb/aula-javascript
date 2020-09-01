/*
var nome="Mylena"
var frase="Brasil é o melhor país do mundo"

console.log(nome);
console.log(frase.replace("Brasil","Japão").toUpperCase());

alert("Bem vinda " + nome);
*/

/*
var lista= ["maça","pera","laranja"];
lista.push("uva");
//lista.pop()
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/

/*dicionário
var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome);

//lista de dicionários
var frutas = [{nome:"Maça", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"}];
console.log(frutas[1]); //elemento 1 que é o {nome:"Uva", cor:"Roxa"} e o nome nele é "Uva"
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
    }
    else{
        alert("Menor de idade");
    };
*/

/*
var count = 0
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1 //não coloca "count = count++" porque vai travar tudo kkkkkk"
    ou
    count++ ;
}]
*/

/*var count; // deu errado REVER
for(count=0; count <= 5; count=++){
    alert(count);
};
*/

var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());
