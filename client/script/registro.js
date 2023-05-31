const form = document.querySelector("form")
const error = document.getElementById("error")

form.addEventListener("submit", async ev => {
    ev.preventDefault()
    console.log(form.nome.value)
    console.log(form.email.value)
    console.log(form.senha.value)
    var request = await fetch("/cadastro-usuario", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: form.nome.value, email: form.email.value, senha: form.senha.value })
    })
    if(request.status == 200){
        window.location.href = '/login'
    } else {
        error.innerHTML = "Tivemos problemas no seu cadastro, tente novamente"
    }
})