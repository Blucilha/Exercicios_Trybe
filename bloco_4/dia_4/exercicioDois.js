

// Boas vindas//
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log(`Bem vinda, ${info.personagem}.`);

//Inserindo uma nova chave e valor//

info.recorrente = "sim";
console.log(info);

//Percorrer as chaves usando o for in//

for (let chaves in info){
    console.log(chaves);
}

//Percorrer apenas os valores//

for (let chaves in info){
    console.log(info[chaves]);
}
