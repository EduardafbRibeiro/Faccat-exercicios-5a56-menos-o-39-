// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
// minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
// de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

let horaInicio = parseFloat(prompt("Digite o horario de inicio da partida em horas inteiras (sem os minutos): "))
let horaFim = parseFloat(prompt("Digite o horario de termino da partida em horas inteiras (sem os minutos): "))
let duracao =  0

if (horaFim < horaInicio) {
    duracao = (24 - horaInicio) + horaFim
} else {
    duracao = horaFim - horaInicio
}

alert("A duração do jogo é de: " + duracao + " horas")