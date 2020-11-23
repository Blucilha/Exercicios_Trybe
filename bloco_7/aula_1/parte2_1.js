const fatorial = (number) => {
    let armazena = number;
    if(number > 2){
        for (let index = number; index > 1; index -= 1){
            number -= 1;
            
            armazena *= number
        } 
    } else { number = 1; armazena = 1}
    
    return armazena;
}
console.log(fatorial(20))