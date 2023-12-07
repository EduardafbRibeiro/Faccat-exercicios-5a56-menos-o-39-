// Modifique o exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor
// informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.

let valor = parseInt(prompt("Digite um valor: "))

while(valor == 0) {
    valor = parseInt(prompt("Digite um valor maior que zero: "))
}

if (valor > 0) {
    for(let i = 0; i <= valor; i++) {
        alert(i)
    }
}
