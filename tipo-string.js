const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senha123";
const stringNumeros = "51234"; //Identifiacmos uma string tudo aquilo que se encontra dentro do "" ou ''

const citacao = "Meu nome é ";
const nomePessoa = "Marcelo";


//concatenacao (+)

console.log(citacao + nomePessoa)

//template string 

/*const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)*/

// Exemplos de padronização de testo e teste de diferenças

const cidade = "sao paulo";
const input = "Sao paulo";

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true

console.log("Quantidade de caracteres");
console.log(cidade.length)