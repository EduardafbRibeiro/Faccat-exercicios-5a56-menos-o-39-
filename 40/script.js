// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
// unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
// a pagar (total a pagar = total - desconto), sabendo-se que:
// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

let nomeProduto = prompt("Digite qual produto foi comprado: ")
let quantidade = parseInt(prompt("Digite a quantidade comprada: "))
let precoUnitario = parseInt(prompt("Digite o valor unitario do produto: "))
let desconto

let total = quantidade * precoUnitario 


if (quantidade <= 5) {
    desconto = (2/100 * total)    
} else {
    if (quantidade > 5 && quantidade <= 10) {
        desconto = (3/100 * total)
    } else if (quantidade > 10) {
        desconto = (5/100 * total)
    }
}
   
total = total - desconto

alert("Total a pagar do produto: " + nomeProduto + ", com desconto é de: " + total)

