// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
// estar em condições, um dos seguintes requisitos deve ser satisfeito:
// - Ter no mínimo 65 anos de idade.
// - Ter trabalhado no mínimo 30 anos.
// - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
// de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
// de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

let nomeEmpregado = prompt("Insira seu nome: ")
let numeroEmpregado = parseInt(prompt("Insira seu codigo: "))
let anoNascimento = parseInt(prompt("Insira seu ano de nascimento: "))
let anoTrabalho = parseInt(prompt("Insira o ano que começou a trabalhar: "))

let anoAtual = 2023
let idadeAtual = anoAtual - anoNascimento
let tempoTrabalho = anoAtual - anoTrabalho

if (idadeAtual >= 65 || tempoTrabalho >= 30 || (idadeAtual >= 60 && tempoTrabalho >= 25)) {
    alert("Idade atual: " + idadeAtual)
    alert("Tempo de trabalho: " + tempoTrabalho)
    alert(nomeEmpregado + "Codigo: " + numeroEmpregado)
    alert("Requer aposentadoria!")
} else {
    alert("Idade atual: " + idadeAtual)
    alert("Tempo de trabalho: " + tempoTrabalho)
    alert(nomeEmpregado + "Codigo: " + numeroEmpregado)
    alert("Não requer aposentadoria!")
}

// Se (IdadeAtual >= 65) Ou (TempoTrabalhado >= 30) Ou ((IdadeAtual >= 60) E (TempoTrabalhado >= 25)) Entao
//    Escreval("Idade atual: ", IdadeAtual)
//    Escreval("Tempo trabalhado: ", TempoTrabalhado)
//    Escreval(NomeEmpregado, " Codigo: ", NumeroEmpregado)
//    Escreval("Requerer aposentadoria")
// Senao
//    Escreval("Idade atual: ", IdadeAtual)
//    Escreval("Tempo trabalhado: ", TempoTrabalhado)
//    Escreval(NomeEmpregado, " Codigo: ", NumeroEmpregado)
//    Escreval("Não requerer aposentadoria")
// Fimse