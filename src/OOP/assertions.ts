type Animal = {
    nome: string;
    comida: string;
}

// let laikaDesc = {} as Animal;
let laikaDesc = <Animal>{};
laikaDesc.nome = "Laika";
laikaDesc.comida = "Carne"

console.log(laikaDesc);