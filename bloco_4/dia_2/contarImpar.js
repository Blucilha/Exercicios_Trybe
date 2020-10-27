let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
numbers = numbers.sort(function(a,b){ return a - b});


for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 == 1){impares.push(numbers[index])}
}


if (impares.length == 0){console.log("Não existe números impares.")}
else {console.log(`A quantidade de números ímpares é de  ${impares.length} números.`)};

