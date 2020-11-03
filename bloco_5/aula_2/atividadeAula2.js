let corpo = document.body;
// Adiciona titulo//
let title = document.createElement("h1");
corpo.appendChild(title);

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


 