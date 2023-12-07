// jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
// de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
// o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
// (considere que o mês possua 4 semanas exatas).

let horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês: "))
let salarioPorHora = parseFloat(prompt("Digite o salario por hora: "))
let horasExtras = 0
let valorHoraExtra = 0
let salarioFinal = 0

if (horasTrabalhadas > 160) {
    horasExtras = horasTrabalhadas - 160
    valorHoraExtra = salarioPorHora + (50/salarioPorHora)
    salarioFinal = (160 * salarioPorHora) + (horasExtras * valorHoraExtra)
} else {
    salarioFinal = horasTrabalhadas * salarioPorHora
}

alert("O salario final do funcionario é de: R$" + salarioFinal)