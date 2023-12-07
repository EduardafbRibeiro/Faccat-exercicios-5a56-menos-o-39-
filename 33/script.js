// Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valorUm = parseInt(prompt("Digite o primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))

if (valorUm == valorDois) {
    alert("Números iguais")
} else if (valorUm > valorDois) {
    alert("Primeiro é maior")
} else if (valorDois > valorUm) {
    alert("Segundo maior")
}