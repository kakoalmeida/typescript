function soma(a: number, b: number){
    return a + b;
}

soma(2, 3);

let nome: string;
let cidade: string;
let idade: number;

nome = "Kaue";
cidade = "Santa Maria";
idade = 22;

function Pessoa(nome: string, cidade: string, idade: number){
    return `Eu sou ${nome}, resido em ${cidade} e tenho ${idade}`
}

Pessoa(nome, cidade, idade);