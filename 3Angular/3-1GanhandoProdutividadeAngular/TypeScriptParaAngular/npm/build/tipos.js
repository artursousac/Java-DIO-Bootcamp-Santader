"use strict";
//Tipos Primitivos: Boolean, Number, String;
let ligado = false;
let nome = "artur";
let idade = 24;
let altura = 1.66; //let altura = 1.66; Ele acaba definindo a variável por inferência.
//Tipos Especiais: Null e Undefined;
let nulo = null;
let indefinido = undefined;
//Tipos Abrangentes: Void e Any
let retorno;
let retornoView = "Teste"; //Aceita qualquer tipo.
//Objeto - Sem Previsibilidade
let produto = {
    name: "artur",
    city: "fortaleza",
    idade: 24,
};
//Objeto - Com Previsibilidade (Modo Correto)
let meuProduto = {
    nome: "teste",
    preco: 3.90,
    unidades: 24,
};
// Array possuem 2 maneiras de serem declaradas:
let dados = ["artur", "ana", "teste3"];
let dados2 = ["artur", "ana", "teste3"];
//O mesmo vale se quiser number, basta alterar a palavra string para number.
//Array com multi tipos.
let infos = [3, "artur"];
//Tuplas (Ordem definida de acordo com a ordem adicionada)
let boleto = ["artur", 3, 5];
