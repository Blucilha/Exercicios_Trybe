let peça = "dama";

// O comando switch é uma função//
// O comando para deixar a string em minuscula é: (nome da variável).toLocaleLowerCase()//

switch (peça.toLocaleLowerCase()){
    case "peão": 
        console.log("Apenas avança uma casa na vertical e captura na diaginal na linha a frente")
    break

    case "torre":
        console.log("Apenas avança na vertical ou hotizontal (esquerda, direita, cima e baixo) e captura o que estiver no caminho")
    break

    case "cavalo":
        console.log("Avança duas casas horizontal ou vertical (sem limite de casas) e vai para uma casa adjacente a última casa, capturando quem estiver nessa casa (obs.: única peça que pula outras).")
    break

    case "bispo":
        console.log("Avança em diagonal (sem limite de casas) e captura quem estiver no caminho")
    break

    case "rainha":
        console.log("Avança em todas as direções e sentido (sem limite de casas), captura quem estiver no caminho")
    break

    case "rei":
        console.log("Avança apenas uma casa em qualquer sentido e direção, captura quem estiver no caminho (obs: se for capturado perde o jogo)")
    break

// Se nenhum, imprime mensagem//

    default:
        console.log("Tem certeza que é uma peça de xadrez?")
};