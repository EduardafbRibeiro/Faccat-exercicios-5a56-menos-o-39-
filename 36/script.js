// Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
//dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
//das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
//novo com a mulher mais velha.



// Se (IdadeHomemUm > IdadeHomemDois) Entao
//    Se (IdadeMulherUm < IdadeMulherDois) Entao
//       SomaUm <- IdadeHomemUm + IdadeMulherUm
//       SomaDois <- IdadeHomemDois + IdadeMulherDois
//       Escreval("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: ", SomaUm)
//       Escreval("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: ", SomaDois)
//    Senao
//       Se (IdadeMulherUm > IdadeMulherDois) Entao
//          SomaUm <- IdadeHomemUm + IdadeMulherDois
//          SomaDois <- IdadeHomemDois + IdadeMulherUm
//          Escreval("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: ", SomaUm)
//          Escreval("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: ", SomaDois)
//       Fimse
//    Fimse
// Senao
//    Se (IdadeHomemUm < IdadeHomemDois) Entao
//       Se (IdadeMulherUm < IdadeMulherDois) Entao
//          SomaUm <- IdadeHomemDois + IdadeMulherUm
//          SomaDois <- IdadeHomemUm + IdadeMulherDois
//          Escreval("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: ", SomaUm)
//          Escreval("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: ", SomaDois)
//       Senao
//          Se (IdadeMulherUm > IdadeMulherDois) Entao
//             SomaUm <- IdadeHomemDois + IdadeMulherDois
//             SomaDois <- IdadeHomemUm + IdadeMulherUm
//             Escreval("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: ", SomaUm)
//             Escreval("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: ", SomaDois)
//          Fimse
//       Fimse
//    Fimse
// Fimse

let idadeHomemUm = parseInt(prompt("Insira a idade do primeiro homem"))
let idadeHomemDois = parseInt(prompt("Insira a idade do segundo homem"))
let idadeMulherUm = parseInt(prompt("Insira a idade da primeira mulher"))
let idadeMulherDois = parseInt(prompt("Insira a idade da segunda mulher"))

let somaUm
let somaDois

if (idadeHomemUm > idadeHomemDois) {
    if (idadeMulherUm < idadeMulherDois) {
        somaUm = idadeHomemUm + idadeMulherUm
        somaDois = idadeHomemDois + idadeMulherDois
        alert("A soma da idade do homem mais velho e a mulher mais nova é de: " + somaUm)
        alert("A soma da idade do homem mais novo e a mulher mais velha é de: " + somaDois)
    } else if (idadeMulherUm > idadeMulherDois) {
        somaUm = idadeHomemUm + idadeMulherDois
        somaDois = idadeHomemDois + idadeMulherUm
        alert("A soma da idade do homem mais velho e a mulher mais nova é de: " + somaUm)
        alert("A soma da idade do homem mais novo e a mulher mais velha é de: " + somaDois)
    }
} else {
    if (idadeHomemUm < idadeHomemDois) {
        if (idadeMulherUm < idadeMulherDois) {
            somaUm = idadeHomemDois + idadeMulherUm
            somaDois = idadeHomemUm + idadeMulherDois
            alert("A soma da idade do homem mais velho e a mulher mais nova é de: " + somaUm)
            alert("A soma da idade do homem mais novo e a mulher mais velha é de: " + somaDois)
        } else  if (idadeMulherUm > idadeMulherDois) {
                    somaUm = idadeHomemDois + idadeMulherDois
                    somaDois = idadeHomemUm + idadeMulherUm
                    alert("A soma da idade do homem mais velho e a mulher mais nova é de: " + somaUm)
                    alert("A soma da idade do homem mais novo e a mulher mais velha é de: " + somaDois)
        }
    } 
}