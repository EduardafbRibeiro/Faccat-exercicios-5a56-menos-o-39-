const button = document.getElementById("botaoTrintaENove")
const modal = document.getElementById("dialog")
const fechar = document.getElementById("ok")

button.onclick = function () {
    modal.showModal()
}

fechar.onclick = function () {
    modal.close()
}