// Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
// crescente.

let valorUm = parseInt(prompt(""))
let valorDois = parseInt(prompt(""))
let valorTres = parseInt(prompt(""))
let valorI = 0

if (valorUm > valorTres) {
    valorI = valorUm
    valorUm = valorTres
    valorTres = valorI
}
if (valorDois > valorTres) {
    valorI = valorTres
    valorTres = valorDois
    valorDois = valorI
} else {
    valorI = valorUm
    valorUm = valorDois
    valorDois = valorI
}

alert("Os valores em ordem crescente são: " + valorUm + ", " + valorDois + ", " + valorTres)