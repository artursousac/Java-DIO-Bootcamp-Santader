//Tipos Primitivos: Boolean, Number, String;

let ligado: boolean = false;
let nome: string = "artur";
let idade: number = 24;
let altura: number = 1.66; //let altura = 1.66; Ele acaba definindo a variável por inferência.

//Tipos Especiais: Null e Undefined;
let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos Abrangentes: Void e Any
let retorno: void;
let retornoView: any = "Teste"; //Aceita qualquer tipo.

//Objeto - Sem Previsibilidade
let produto: object = {
    name: "artur",
    city: "fortaleza",
    idade: 24,
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

//Objeto - Com Previsibilidade (Modo Correto)
let meuProduto: ProdutoLoja = {
    nome: "teste",
    preco: 3.90,
    unidades: 24,
};

// Array possuem 2 maneiras de serem declaradas:

let dados: string[] = ["artur", "ana", "teste3"];
let dados2: Array<string> = ["artur", "ana", "teste3"];
//O mesmo vale se quiser number, basta alterar a palavra string para number.

//Array com multi tipos.
let infos: (string | number)[] = [3, "artur"];

//Tuplas (Ordem definida de acordo com a ordem adicionada)

let boleto: [string, number, number] = ["artur", 3, 5];