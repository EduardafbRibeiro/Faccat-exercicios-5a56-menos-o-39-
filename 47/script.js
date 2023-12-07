// Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [45] caso o segundo valor
// informado seja ZERO.

let valorUm = parseInt(prompt("Digite um valor: "))
let valorDois = parseInt(prompt("Digite outro valor: "))
let divisao 

if (valorDois == 0) {
    while(valorDois == 0){
        alert("Valor inválido")
        valorDois = parseInt(prompt("Digite outro valor diferente de zero: "))
    }
}

divisao = valorUm / valorDois

alert("O valor da divisão entre os dois numeros é: " + divisao)