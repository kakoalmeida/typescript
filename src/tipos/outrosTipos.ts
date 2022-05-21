function estaVazia(): void {
    console.log("Esta é uma void function");
}

// Loops infinitos
// Ou funções sem trigger

function eternalLoop(): never {
    while(true){}
}

function msgErro(message: string): never {
    throw new Error("Sorry!!!")
}

//  TYPE ALIAS


type Funcionario = {
    name: string,             // Criação de objetos parecido com Java || OOP
    func: string,
    salary: number;
    age: number;
}

const kaue: Funcionario = {
    name: "Kaue",
    func: "Infra",
    salary: 5200.63,
    age: 22
}

// console.log(kaue);


// Union type

type LogsEntrada = 'info' | 'error' | 'debug';

function getLogMessage(message: string, level: LogsEntrada) {
    console.log(`[${level}] - ${message}`)
}

// getLogMessage('Novo usuario', 'info');
// getLogMessage('Falha ao criar', 'error');
// getLogMessage('Analisando...', 'debug');

// intersection types = &&

type About = {
    bio: string;
    languages: string[];
}

type Profile = Funcionario & About;
const infoUser: Profile = {
    name: 'Laika',
    func: 'Minha veia',
    salary: 2000,
    age: 13,
    bio: 'A mais linda e querida',
    languages: ['au au', 'comida']
}


console.log(infoUser);