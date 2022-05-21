class User {

    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Player extends User {

    public rank: string;
    public tmpJogo: number;

    constructor(name: string, age: number, rank: string, tmpJogo: number){
        super(name, age);

        this.rank = rank;
        this.tmpJogo = tmpJogo;
    }

    tempoDeJogo(){
        return `Atualmente jogo há ${this.tmpJogo} anos`;
    }

    static horario(){
        return Date();
    }

}

const Kaue = new Player('Kaue Almeida', 22, 'Nivel Ouro', 6);
const Eduarda = new Player('Eduarda Schimanoski', 21, 'Nivel Prata', 5);
const Iara = new Player('Iara Idaci', 61, 'Nivel Supremo', 7);

console.log(Kaue);
console.log(Eduarda.tempoDeJogo());
console.log(Iara);

console.log(Player.horario());