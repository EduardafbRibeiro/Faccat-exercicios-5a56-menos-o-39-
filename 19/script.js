// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
// 20

let valorUm = parseInt(prompt("Digite primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))

if (valorUm > valorDois) {
    alert("O maior numero é o: " + valorUm + " e o menor numero é o: " + valorDois)
} else {
    alert("O maior numero é o: " + valorDois + " e o menor numero é o: " + valorUm)
}