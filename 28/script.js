// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let valorUm = parseInt(prompt("Digite o primeiro numero: "))
let valorDois = parseInt(prompt("Digite o segundo numero"))
let valorTres = parseInt(prompt("Digite o terceiro numero: "))

if (valorUm > valorDois && valorUm > valorTres) {
    alert("O maior numero é: " + valorUm)
} else if (valorDois > valorUm && valorDois > valorTres) {
    alert("O maior numero é: " + valorDois)
} else if (valorTres > valorUm && valorTres > valorDois) {
    alert("O maior numero é: " + valorTres)
}