let valorDeCusto = 0;
let valorDeVenda = 120;

//Declarando o imposto sobre o custo//
let impostoSobreCusto;
impostoSobreCusto = valorDeCusto*0.2

//Atualiza o valor de custo//
valorDeCusto += impostoSobreCusto

//Declara a operação para obter lucro//
let lucro;
lucro = valorDeVenda - valorDeCusto

//Código para reconhecer certas condições//
if (valorDeCusto == 0 || valorDeVenda == 0) {console.log("Falta algum valor!")}
    else if (valorDeVenda > valorDeCusto){console.log(`O lucro pela venda das 1000 unidades é de`, 1000*lucro)}
        else {console.log(" valor de venda precisa ser aumentado")};

