// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
// ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
// dos outros 2 lados.

let valorUm = parseInt(prompt("Digite o primeiro valor"))
let valorDois = parseInt(prompt("Digite o segundo valor"))
let valorTres = parseInt(prompt("Digite o terceiro valor"))

if (valorUm < valorDois + valorTres && valorDois < valorUm + valorTres && valorTres < valorDois + valorUm) {
    alert("Estes valores formam um triângulo!")
} else {
    alert("Estes valores não formam um triângulo!")
}

