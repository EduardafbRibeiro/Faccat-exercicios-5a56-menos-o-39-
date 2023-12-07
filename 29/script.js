// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
// maiores.

let valorUm = parseInt(prompt("Digite o primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))
let valorTres = parseInt(prompt("Digite o terceiro valor: "))
let troca = 0
let soma = 0

if (valorUm < valorDois && valorUm < valorTres) {
    soma = valorDois + valorTres
} else if (valorDois < valorUm && valorDois < valorTres) {
    soma = valorUm + valorTres
} else if (valorTres < valorUm && valorTres < valorDois) {
    soma = valorUm + valorDois
}

alert("A soma dos 2 maiores numeros é de: " + soma)