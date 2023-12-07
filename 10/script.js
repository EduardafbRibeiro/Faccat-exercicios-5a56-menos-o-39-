// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário.

let salarioAtual = parseFloat(prompt("Digite seu salário atual: "))
let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "))

let salarioNovo = salarioAtual + ((reajuste / 100)* salarioAtual)

alert("O valor do seu novo salário é de: " + salarioNovo)