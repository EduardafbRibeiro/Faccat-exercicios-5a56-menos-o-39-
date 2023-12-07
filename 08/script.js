// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
// de eleitores.


let totalDeEleitores = parseFloat(prompt("Digite a quantidade total de eleitores do município: "))
let votosBrancos = parseFloat(prompt("Digite a quantidade de votos brancos: "))
let votosNulos = parseFloat(prompt("Digite a quantidade de votos nulos: "))
let votosValidos = parseFloat(prompt("Digite a quantidade de votos validos: "))

let brancos = (votosBrancos / 100) * totalDeEleitores
let nulos = (votosNulos / 100) * totalDeEleitores
let validos = (votosValidos / 100) * totalDeEleitores

alert("O percentual de votos brancos é de: " + votosBrancos + "%")
alert("O percentual de votos nulos é de: " + votosNulos + "%")
alert("O percentual de votos validos é de: " + votosValidos + "%")