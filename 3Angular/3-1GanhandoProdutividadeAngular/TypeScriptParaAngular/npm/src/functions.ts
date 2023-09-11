//funções
function addNumber (x: number, y: number): number{
    return x * y;
}

function addToHello(name: string){
    return `Hello ${name}`;
}

let soma: number = addNumber(4, 7);

function callToPhone(phone: number | string) {
    return phone;
}

console.log(callToPhone(113133113));