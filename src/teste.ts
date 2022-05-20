function soma(a: number, b: number) {
    return a + b;
}

soma(2, 3);

let nome: string;
let cidade: string;
let idade: number;
let work: boolean = true;

nome = "Kaue";
cidade = "Santa Maria";
idade = 22;

function Pessoa(nome: string, cidade: string, idade: number) {
    return `Eu sou ${nome}, resido em ${cidade} e tenho ${idade}`
}

// Pessoa(nome, cidade, idade);


function diasVida(idade: number) {
    return idade * 365;
}

// diasVida(22);

work = false;

function verificaAtividade(status: boolean) {
    if (status) {
        return `Ativo`
    } else {
        return `Desativado`
    }
}

verificaAtividade(false);

// console.log(verificaAtividade(false));

// console.log("Se passaram " + diasVida(22) + " dias");

// console.log(Pessoa(nome, cidade, idade));


/* Arrays */

const animais: string[] = [
    "Laika",
    "Twitch",
    "Mima",
    "Frida",
    "Mirana",
    "Pequena"
]

animais.push("Melissa");

function meuArray(meuArray: string[]){
    return `Meus animas =>> ${meuArray.join(', ')}`
}

console.log(meuArray(animais))