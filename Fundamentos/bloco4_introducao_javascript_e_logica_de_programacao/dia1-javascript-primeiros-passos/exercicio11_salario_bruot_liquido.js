let grossSalary = 3000;

let aliquotINSS;
let aliquotIR;

if (grossSalary <= 1556.94){
    aliquotINSS = 0.08 * grossSalary;
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92){
    aliquotINSS = 0.09 * grossSalary;
}
else if (grossSalary >= 2594.93 && grossSalary < 5189.82){
    aliquotINSS = 0.11 * grossSalary;
}
else if (grossSalary >= 5189.82){
    aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if(baseSalary <= 1903.98){
    aliquotIR = 0;
}
else if(baseSalary >= 1903.99 && baseSalary <= 2826.65){
    aliquotIR = (0.075 * baseSalary) - 142.80 ;
}
else if(baseSalary >= 2826.66 && baseSalary <= 3751.05){
    aliquotIR = (0.15 * baseSalary) - 354.80;
}
else if(baseSalary >= 3751.06 && baseSalary <= 4664.68){
    aliquotIR = (0.225 * baseSalary) - 354.80;
}
else if(baseSalary >= 4664.68){
    aliquotIR = (0.275 * baseSalary) - 354.80;
}

let liquidSalary = baseSalary - aliquotIR;
console.log("O seu salario liquido é de : ", liquidSalary)