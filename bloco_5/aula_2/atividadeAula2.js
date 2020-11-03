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


