// Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
// exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
// e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
// N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
// Média_de_Aproveitamento = ---------------------------------------------------------
// 7
// A atribuição de conceitos obedece a tabela abaixo:
// Média de Aproveitamento Conceito
// > = 9,0 A
// > = 7,5 e < 9,0 B
// > = 6,0 e < 7,5 C
// < 6,0 D

let notaUm = parseInt(prompt("Digite aqui sua primeira nota: "))
let notaDois = parseInt(prompt("Digite aqui sua segunda nota: "))
let notaTres = parseInt(prompt("Digite aqui sua terceira nota: "))
let notaQuatro = parseInt(prompt("Digite aqui sua quarta nota: "))
let mediaExercicios = parseInt(prompt("Digite aqui a media de exercicios: "))

let mediaAproveitamento = ((notaUm + (notaDois * 2) + (notaTres * 3) + mediaExercicios) / 7)

let conceito 

if (mediaAproveitamento >= 9) {
   conceito = "A"
} else {
   if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
      conceito = "B"
   } else {
      if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
         conceito = "C"
      } else if (mediaAproveitamento < 6) {
         conceito = "D"
      }
   }
}

alert("O conceito do aluno de acordo com a tabela é: " + conceito)

