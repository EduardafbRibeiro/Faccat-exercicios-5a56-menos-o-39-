// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
// ultrapassar este valor, calcular e escrever o seu salário total.

let salarioFixo = parseFloat(prompt("Escreva o valor de seu salario: "))
let valorDeVendas = parseFloat(prompt("Escreva o valor do total de vendas: "))

let salarioTotal = (valorDeVendas * (3/100))

if (salarioTotal > 1500) {
    salarioTotal = (valorDeVendas * (5/100)) - 1500
}

alert("O valor do seu salario com a comissão é de: " + salarioTotal)