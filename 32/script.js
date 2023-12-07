// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
// do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

let nomeTimeUm = prompt("Digite o nome do primeiro time: ")
let numeroDeGolsUm = prompt("Digite a quantidade de gols do " + nomeTimeUm + ":")
let nomeTimeDois = prompt("Digite o nome do segundo time: ")
let numeroDeGolsDois = prompt("Digite a quantidade de gols do " + nomeTimeDois + ":")

if (numeroDeGolsUm > numeroDeGolsDois) {
    alert("O time vencedor é o " + nomeTimeUm)
} else if (numeroDeGolsDois >  numeroDeGolsUm) {
    alert("O time vencender é o " + nomeTimeDois)
} else if (numeroDeGolsUm = numeroDeGolsDois) {
    alert("O jogo deu empate")
}