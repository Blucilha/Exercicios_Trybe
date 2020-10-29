
let contrario = "";
function palindromo (palavra){
for (let index = palavra.length - 1; index >= 0; index --){
    contrario = contrario + palavra[index];};

if (contrario === palavra){console.log("true")}
    else {console.log("false")};

}
palindromo("arara");
