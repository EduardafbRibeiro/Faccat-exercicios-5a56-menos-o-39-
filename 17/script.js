// Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
// aluno é aprovado). Escrever também a média calculada.

let notaUm = parseInt(prompt("Digite a primeira nota: "))
let notaDois = parseInt(prompt("Digite a segunda nota: "))

let mediaAluno = (notaUm + notaDois) / 2

if (mediaAluno >= 6) {
    alert("O aluno foi aprovado!! sua media foi de: " + mediaAluno)
} else {
    alert("O aluno foi reprovado!! sua media foi de: " + mediaAluno)
}