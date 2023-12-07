// Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
// mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
// vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor.

let numeroCarros = parseFloat(prompt("Informe o número de carros vendidos: "))
let valorVendas = parseFloat(prompt("Informe o valor total das vendas: "))
let salarioFixo = parseFloat(prompt("Informe o salário fixo: "))
let valorPorCarro = parseFloat(prompt("Informe o valor por carro vendido: "))

let salarioFinal = salarioFixo + (numeroCarros * valorPorCarro) + ((5/100)*valorVendas)

alert("O salário final do vendedor é: R$ " + salarioFinal)