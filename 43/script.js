// Seja o seguinte algoritmo:
// inicio
// ler a, b, c
// se (a < b+c) e (b <a+c) e (c <a+b) então
//  se (a=b) e (b=c) então
//  mens = 'Triângulo Equilátero'
//  senão
//      se (a=b) ou (b=c) ou (a=c) então
//      mens = 'Triângulo Isósceles'
//      senão
//      mens = 'Triângulo Escaleno'
//      fim_se
//  fim_se
// senão
//  mens = 'Não e possível formar um triângulo'
// fim_se
// escrever mens
// fim
// Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:

let valoA = parseInt(prompt("Digite o valor de A: "))
let valorB = parseInt(prompt("Digite o valor de B: "))
let valorC = parseInt(prompt("Digite o valor de C: "))
let mens

if ((valoA < valorB + valorC) && (valorB < valoA + valorC) && (valorC < valoA + valorB)) {
    if ((valoA = valorB) && (valorB = valorC)) {
        mens = "Triângulo Equilátero"
    } else {
        if ((valoA = valorB) || (valorB = valorC) || (valoA = valorC)) {
            mens = "Triângulo Isósceles"
        } else {
            mens = "Triângulo Escaleno"
        }
    }
} else {
    mens = "Não é possivel formar um triângulo"
}
alert(mens)