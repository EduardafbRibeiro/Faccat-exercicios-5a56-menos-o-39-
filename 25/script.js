// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
// ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

let numeroConta = parseInt(prompt("Digite seu numero de conta: "))
let saldo = parseFloat(prompt("Digite seu saldo: "))
let debito = parseFloat(prompt("Digite o valor debitado: "))
let credito = parseFloat(prompt("Digite o valor creditado: "))

let saldoAtual = saldo - debito + credito

if (saldoAtual >= 0) {
    alert("Saldo positivo! seu saldo é de: " + saldoAtual)
} else if (saldoAtual < 0) {
    alert("Saldo Negativo! seu saldo é de: " + saldoAtual)
}