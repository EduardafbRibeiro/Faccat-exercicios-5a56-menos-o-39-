// Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
// que o N será sempre maior que ZERO.

let valor = parseInt(prompt("Digite um valor: "))

while(valor == 0) {
    valor = parseInt(prompt("Digite um valor maior que zero: "))
}

if (valor > 0) {
    for(let i = 0; i <= valor; i++) {
        alert(i)
    }
}
