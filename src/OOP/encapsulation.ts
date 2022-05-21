/* PUBLIC = Acessivel de forma geral
   PRIVATE = Acessivel apenas dentro da classe onde foi criado
   PROTECTED = Acessivel apenas dentro da propria classe e nao pode ser acessado no codigo
*/

class VideoGame {

    public nome: string;
    protected valor: number;
    private expansao: string;

    constructor(nome: string, valor: number, expansao: string){
        this.nome = nome;
        this.valor = valor;
        this.expansao = expansao;
    }

    qualExp(){
        return this.expansao;
    }

}

class Personagem {

    private nome: string;
    private level: number;

    constructor(nome: string, level: number) {
        this.nome = nome;
        this.level = level;
    }

    caracteristicaPersonagem(){
        return this.nome + ", level " + this.level;
    }
}

const wow = new VideoGame('World of Wacraft', 120, 'Pandaria');
const meuPersonagem = new Personagem('Crazynature', 60);



console.log(meuPersonagem.caracteristicaPersonagem());
console.log(wow.qualExp());