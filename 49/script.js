// Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício [48]. Se for
// respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.

let notaUm 
let notaDois 
let media
let resposta

do {

notaUm = parseInt(prompt("Digite a primeira nota: "))
notaDois = parseInt(prompt("Digite a segunda nota: "))
    

while (notaUm < 0 || notaUm > 10) {
    notaUm = parseInt(prompt("Digite a primeira nota com valores válidos: "))
}

while (notaDois < 0 || notaDois > 10) {
    notaDois = parseInt(prompt("Digite a segunda nota com valores válidos: "))
}

media = (notaUm + notaDois) / 2

alert("A media do aluno é de: " + media)

resposta = prompt("NOVO CÁLCULO (S/N)?")

} while (resposta == "S")