// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra.

let macas = parseInt(prompt("Digite a quantidade de maças compradas: "))

if (macas < 12) {
    macas = macas * 1.30    
} else if (macas >= 12) {
    macas = macas * 1.00
}

alert("O valor total da compra é de: " + macas)