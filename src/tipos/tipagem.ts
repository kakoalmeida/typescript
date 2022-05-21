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

// console.log(meuArray(animais))

/* Tuplas */

const laika: [string, number] = [
    "Laika", 13
];

const mima: [string, number] = [
    "Mima", 8
];

// console.log(laika, mima);

/* ENUM */

enum Users {
    admin,
    desenvolvedor,
    visitante
}

const root = {
    nivel: Users.admin
}

const dev = { 
    nivel: Users.desenvolvedor
}

// console.log(root, dev);

// let myFloat: number = 15.6;
// console.log(myFloat);
// myFloat = 22.11;
// console.log(myFloat);

/* ANY */

let randNumber: any;

randNumber = 25;
randNumber = "25";

// console.log(typeof(randNumber));

let trocaTipo: any = 1234;
let novoTipo: string;
novoTipo = trocaTipo;
console.log(typeof(novoTipo));

/* UNKNOWN */

let info: unknown;

// null

var valeNada: null;

// objects

const funcionario: object = {
    name: 'Kaue',
    cargo: 'Mestre',
    salario: 5000.00,
    tmpSrv: '5 anos'
};


console.log(funcionario);























