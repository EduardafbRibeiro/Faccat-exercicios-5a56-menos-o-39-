// Ler um valor e escrever se é positivo, negativo ou zero.

let valor = parseInt(prompt("Digite um numero"))

if (valor > 0) {
    alert("Este numero é maior que zero!")
} else if (valor < 0) {
    alert("Este numero é menor que zero!")
} else {
    alert("Este numero é igual a zero!")
}