// Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
// final é: Mf = (n1 * 2) + (n2 * 3) + (n3 * 5) / 10

let nUm = parseInt(prompt("Digite a primeira nota do aluno: "))
let nDois = parseInt(prompt("Digite a segunda nota do aluno: "))
let nTres = parseInt(prompt("Digite a terceira nota do aluno: "))

let mediaFinal = ((nUm * 2) + (nDois * 3) + (nTres * 5)) / 10

alert("A media final do aluno é de: " + mediaFinal)