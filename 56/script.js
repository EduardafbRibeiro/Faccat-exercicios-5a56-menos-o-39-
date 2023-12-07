// Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor
// lido.

let valor = parseInt(prompt("Digite um valor: "))
let i = 1

while (valor < 1 || valor > 10) {
    valor = parseInt(prompt("Digite um valor que seja maior que 1 e menor que 10: "))
}

do{
    resultado = valor * i
    alert(valor + " X " + i + " = " + resultado)
    i++
}while(i <= 10)