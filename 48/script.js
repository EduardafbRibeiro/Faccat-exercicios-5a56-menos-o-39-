// Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
// média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada
// nota.

let notaUm = parseInt(prompt("Digite a primeira nota: "))
let notaDois = parseInt(prompt("Digite a segunda nota: "))
let media

while (notaUm < 0 || notaUm > 10) {
    notaUm = parseInt(prompt("Digite a primeira nota com valores válidos: "))
}

while (notaDois < 0 || notaDois > 10) {
    notaDois = parseInt(prompt("Digite a segunda nota com valores válidos: "))
}

media = (notaUm + notaDois) / 2

alert("A media do aluno é de: " + media)