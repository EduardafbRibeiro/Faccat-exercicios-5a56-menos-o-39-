// Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [44] caso o segundo valor
// informado seja ZERO.]

let valorUm = parseInt(prompt("Digite um valor: "))
let valorDois = parseInt(prompt("Digite outro valor: "))
let contador = 0;
let divisao

if (valorDois == 0 ) {
    do{
        alert("Valor inválido")
        valorDois = parseInt(prompt("Digite outro valor diferente de zero: "))
        
    }while(valorDois == 0)
}

divisao = valorUm / valorDois

alert("O valor da divisão entre os dois numeros é: " + divisao)