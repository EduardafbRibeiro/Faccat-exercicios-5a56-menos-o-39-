// Seja o seguinte algoritmo:
// início
// ler x
// ler y
// z = (x*y) + 5
// se z <= 0 então
// resposta = ‘A’
// senão
// se z <= 100 então
// resposta = ‘B’
// senão
// resposta = ‘C’
// fim_se
// fim_se
// escrever z, resposta
// fim
// Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:
// Variáveis
// X Y Z Resposta
// 3 2
// 150 3
// 7 -1
// -2 5
// 50 3


let valorX = parseInt(prompt("Digite o valor de X: "))
let valorY = parseInt(prompt("Digite o valor de Y: "))

let valorZ = (valorX * valorY) + 5

let resposta

if (valorZ <= 0) {
    resposta = "A"
} else if (valorZ <= 100) {
    resposta = "B"
} else {
    resposta = "C"
}

alert("O resultado de Z é de: " + valorZ + " e a resposta correta é: " + resposta)