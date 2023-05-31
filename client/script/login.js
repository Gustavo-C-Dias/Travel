const form = document.querySelector("form")

form.addEventListener("submit", async ev => {
    ev.preventDefault()
    var request = await fetch("/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.value, senha: form.senha.value })
    })
    if(request.status == 200){
        window.location.href = '/inserir'
    } else {
        alert("Usuário não encontrado")
    }
})