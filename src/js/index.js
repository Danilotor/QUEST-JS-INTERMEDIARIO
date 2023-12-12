//Primeiro passo  puxar os elementos do formulario

let botaoEnviar = document.getElementById("enviar")

let inputs = document.querySelectorAll('input')

let campoMensagem = document.getElementById("mensagem")

let mensagemObrigatorio = document.querySelectorAll(".obrigatorio")



//segundo passo - verificação se tiver ou nao algo escrito



botaoEnviar.addEventListener('click', () => {
    inputs.forEach((campo, indice) => {
        if (campo.value === "") {
            campo.classList.add("incorreto")
            campo.classList.remove("correto")
            mensagemObrigatorio[indice].style.display = 'flex'

        } else {
            campo.classList.remove("incorreto")
            campo.classList.add("correto")
            mensagemObrigatorio[indice].style.display = 'none'

        }
    })
})




botaoEnviar.addEventListener("click", (indice) => {



    if (campoMensagem.value === "") {
        campoMensagem.classList.add("incorreto")
        campoMensagem.classList.remove("correto")
        mensagemObrigatorio[3].style.display = 'flex'



    } else {

        campoMensagem.classList.remove("incorreto")
        campoMensagem.classList.add("correto")
        mensagemObrigatorio[3].style.display = 'none'

    }

})