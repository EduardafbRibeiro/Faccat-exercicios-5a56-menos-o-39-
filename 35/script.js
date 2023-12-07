// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// até 20 litros, desconto de 3% por litro
// Álcool
// acima de 20 litros, desconto de 5% por litro
// até 20 litros, desconto de 4% por litro
// Gasolina
// acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
// seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
// que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.


let litrosVendidos = parseInt(prompt("Digite a quantidade de litros: "))
let combustivel = prompt("Digite o tipo de combustivel sendo A para álcool e G para gasolina: ")

let valorASerPago 

if (combustivel = "A" && litrosVendidos > 0) {
    if (litrosVendidos <= 20) {
        valorASerPago = (litrosVendidos * 2.90) - (3/10 * (litrosVendidos * 2.90))
        alert("O valor a ser pago é de: R$" + valorASerPago)
    } else if (litrosVendidos > 20) {
        valorASerPago = (litrosVendidos * 2.90) - (5/100 * (litrosVendidos * 2.90))
        alert("O valor a ser pago é de: R$" + valorASerPago)
    } else {
        alert("A quantidade de litros vendidos não é valida!!")
    }
} else if (combustivel = "G" && litrosVendidos > 0) {
    if (litrosVendidos <= 20) {
        valorASerPago = (litrosVendidos * 3.30) - (4/100 * (litrosVendidos * 3.90))
        alert("O valor a ser pago é de: R$" + valorASerPago)
    } else if (litrosVendidos > 20) {
        valorASerPago = (litrosVendidos * 3.30) - (6/100 * (litrosVendidos * 3.30))
        alert("O valor a ser pago é de: R$" + valorASerPago)
    }
} else {
    if (litrosVendidos <= 0 && combustivel != "G" && combustivel != "A") {
    alert("A quantidade de litros vendidos e o tipo de cobustivel não são validos!!")
    } else if (litrosVendidos <= 0 && combustivel == "G" || combustivel == "A") {
    alert("A quantidade de litros vendidos não é valida!!")
    } 
    alert("O tipo de combustivel não é valido!!")
}