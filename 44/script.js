// Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
// um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
// da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).

let valorUm = parseInt(prompt("Digite um valor: "))
let valorDois = parseInt(prompt("Digite outro valor: "))
let contador = 0;
let divisao

if (valorDois == 0 ) {
    do{
        valorDois = parseInt(prompt("Digite outro valor diferente de zero: "))
        
    }while(valorDois == 0)
}

divisao = valorUm / valorDois

alert("O valor da divisão entre os dois numeros é: " + divisao)