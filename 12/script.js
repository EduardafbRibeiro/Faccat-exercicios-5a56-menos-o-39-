// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
// correspondente em graus Celsius (baseado na fórmula abaixo): C / 5 = F-32 / 9 Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F

let F = parseFloat(prompt("Digite o valor em Fahrenheit: "))

let C = (F-32) * 5/9

alert("A temperatura em celsius é de: " + C)