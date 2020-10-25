let salarioBruto = 1500.10;

let inssDeduzido;

//Dá novos valores para o imposto INSS//
if (salarioBruto <= 1556.95){inssDeduzido = salarioBruto - salarioBruto*0.08}
    else if (salarioBruto > 1556.95 && salarioBruto <= 2594.42){inssDeduzido = salarioBruto - salarioBruto * 0.09}
        else if( salarioBruto > 2594.42 && salarioBruto <= 5189.82){inssDeduzido = salarioBruto - salarioBruto*0.11}
else if (salarioBruto > 5189.82){inssDeduzido = salarioBruto - 570.88}

console.log(inssDeduzido);

let irDeduzido;
if (inssDeduzido > 1903.98 && inssDeduzido <= 2826.65){irDeduzido = inssDeduzido*0.075 - 142.80}
    else if (inssDeduzido > 2826.66 && inssDeduzido <= 3751.05){irDeduzido = inssDeduzido*0.15 - 354.80}
        else if (inssDeduzido > 3751.05 && inssDeduzido <= 4664.68){irDeduzido = inssDeduzido*0.225 - 636.13}
            else if (inssDeduzido > 4664.68){irDeduzido = inssDeduzido*0.275 - 869.36}
else {irDeduzido = inssDeduzido*0}


console.log(`Seu salário é de:`, inssDeduzido - irDeduzido)



