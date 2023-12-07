// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

let anoAtual = parseInt(prompt("Digite o ano atual: "))
let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu: "))

let podeVotar = anoAtual - anoNascimento

if (podeVotar >= 18) {
    alert("Você pode votar este ano!")
} else if (podeVotar < 18) {
    alert("Você não pode votar este ano!")
}