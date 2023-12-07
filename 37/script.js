// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
// Até 5 Kg Acima de 5 Kg
// Morango R$ 2,50 por Kg R$ 2,20 por Kg
// Maçã R$ 1,80 por Kg R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

let fruta = prompt("Insita a fruta comprada: ")
let kg = parseInt(prompt("Insira a quantidade em Kg de " + fruta + " compradas: "))

let valorKg

if (fruta = "Maça") {
    if (kg <= 5) {
        valorKg = kg * 1.80
    } else if (kg > 5) {
        valorKg = kg * 1.50
    }
} else {
    if (fruta = "Morango") {
        if (kg <= 5) {
            valorKg = kg * 2.50
        } else if (kg > 5) {
            valorKg = kg * 1.50
        }
    }    
}

if (kg > 8 || valorKg > 25) {
    valorKg = valorKg - ((10/100) * valorKg)
}

alert("O valor a ser pago é de: R$" + valorKg)
