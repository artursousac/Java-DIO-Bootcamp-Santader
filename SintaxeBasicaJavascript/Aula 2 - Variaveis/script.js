// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string

var nome = 'Artur';
console.log(typeof(nome));

//function

var funcao = function(){}
console.log(typeof(funcao));

//como declarar

var variavel = 'Artur'
variavel = 'Cavalcante'
console.log(variavel)

let variavelLet = 'Artur'
variavelLet = 'Cavalcante'
console.log(variavelLet)

const variavelConst = 'Artur'
//variavelConst = 'Cavalcante'
console.log(variavelConst)

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}

escopoLocal();