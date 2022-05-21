interface Jogo {
    nome: string;
    valor: number;
    premios: string [];
    rank(): string;
}

const novoJogo: Jogo = {
    nome: 'The witcher 3',
    valor: 50,
    premios: ['GOTY', 'E3', 'BAFTA'],
    rank(){
        return '10/10 metacritic'
    }
}

console.log(novoJogo);