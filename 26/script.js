// Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
// média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
// a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
// compra'.

let quantidadeAtualEmEstoque = parseFloat(prompt("Digite a quantidade atual em estoque: "))
let quantidadeMaximaEmEstoque = parseFloat(prompt("Digite a quantidade maxima em estoque: "))
let quantidadeMinimaEmEstoque = parseFloat(prompt("Digite a quantidade minima em estoque: "))

let quantidadeMedia = (quantidadeMaximaEmEstoque + quantidadeMinimaEmEstoque) / 2

if (quantidadeAtualEmEstoque >= quantidadeMedia) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")    
}