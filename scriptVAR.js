//var

/*var altura = 5;
var cumprimento = 7;

var area = altura * cumprimento; //usando o node.js nao é obrigatorio decalar a VAR por exemplo area = altura * cumprimento;
console.log(area)*/


/*let forma = "retangulo";
let altura = 5;
let cumprimento = 7;
let area;

if (forma === "retangulo"){
    area = altura * cumprimento;
} else {
    area = (altura * cumprimento) / 2;
}

console.log("O valor da area é ", area)*/


const forma = "quadrado";
const altura = 5;
const cumprimento = 7;
let area; // Precisamos declarar como Let pois o "const" é um valor fixo e nesse caso precisariamo declarar o valor que não é o caso

if(forma === "quadrado"){
    area= altura * cumprimento;
} else {
    area = (altura * cumprimento) / 2;
}

console.log ("O valor da area é ", area)