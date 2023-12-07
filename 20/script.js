// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

let valorUm = parseInt(prompt("Digite o primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))

if (valorUm > valorDois) {
    alert("Os numeros digitados em ordem crescente são de: " + valorDois + ", " + valorUm)
} else {
    alert("Os numeros digitados em ordem crescente são de: " + valorUm + ", " + valorDois)
}
