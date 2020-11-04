// Adiciona titulo//
let corpo = document.body;
let title = document.createElement("h1");
title.className = "titulo"
corpo.appendChild(title);
title.innerText = "Exercício 5.2 - JavaScript DOM";

// Adiciona div e classe//
let div = document.createElement("div");
div.className = "main-content"
corpo.appendChild(div);


// Adiciona uma div filho da div "main-content"//
let localizar = document.querySelector(".main-content");
let outraDiv = document.createElement("div");
outraDiv.className = "center-content";
localizar.appendChild(outraDiv);

// Adiciona tag p na tag anterior e colocar algum texto//
let localizarFilho = document.querySelector(".center-content");
let paragrafo = document.createElement("p");
localizarFilho.appendChild(paragrafo);
paragrafo.innerText = "Bruce gosta muito de animes, mas está gostando mais da Trybe";

// Adiciona outra div filho da primeira div//
let irmaoDaOutraDiv = document.createElement("div");
irmaoDaOutraDiv.className = "left-content";
localizar.appendChild(irmaoDaOutraDiv);

// Adiciona outra div filho da primeira div//
let irmaoDireitoDaOutra = document.createElement("div");
irmaoDireitoDaOutra.className = "right-content";
localizar.appendChild(irmaoDireitoDaOutra);

// Adiciona imagem//
let imagem = document.createElement("IMG");
imagem.className = "small-image"
imagem.src = "https://picsum.photos/200";
irmaoDaOutraDiv.appendChild(imagem);

// Adicionando lista não ordenada//
let listaDeNumeros = document.createElement("ul");
listaDeNumeros.className = "lista_numeros";
irmaoDireitoDaOutra.appendChild(listaDeNumeros);

// Criando variavel de localização para a lista//
let listagemDeNumeros = document.querySelector(".lista_numeros");

// Criando lista//
let listaNaoOrdenada = [
    "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"
]
// Associando cada item à lista//
for (let index in listaNaoOrdenada){
    let numeros = listaNaoOrdenada[index];
    let naoEnumera = document.createElement("ul");
    naoEnumera.innerText = numeros;

    listagemDeNumeros.appendChild(naoEnumera);
}
