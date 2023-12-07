// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

let anos = parseInt(prompt("Digite quantos anos você tem: "))
let meses = parseInt(prompt("Digite em que mês você esta de forma numerica: "))
let dias = parseInt(prompt("Digite em que dia você esta de forma numerica: "))

let diasDeVida = (anos * 365) + (meses * 30) + dias

alert("Voce tem " + diasDeVida + " dias de vidas")