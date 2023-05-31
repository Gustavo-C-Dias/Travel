const destino = document.getElementById("destino");
const form_cards = document.getElementById("form-card")
const form_lista = document.getElementById("form-lista")

form_cards.style.display = "none";
form_lista.style.display = "none";

destino.addEventListener("change", () => {
    switch (destino.value) {
      case 'Card':
        form_cards.style.display = "flex";
        form_lista.style.display = "none";
        break;
      case 'Lista':
        form_cards.style.display = "none";
        form_lista.style.display = "flex";
        break;
    }
});


  form_cards.addEventListener("submit", async ev => {
    let acao = document.getElementById("acao-card")
    ev.preventDefault()
    if(acao.options[acao.selectedIndex].value == 'inserir'){
      var request = await fetch("/form-card", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cidade: form_cards.cidade.value, estado: form_cards.estado.value, url: form_cards.url.value })
      })
      if(request.status == 200){
          alert("Um novo card foi adicionado ao sistema")
          window.location.href = '/'
      } else {
          alert("Tivemos problema no seu cadastro")
      }
    } else {
      var request = await fetch("/form-card", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cidade: form_cards.cidade.value })
      })
    if(request.status == 200){
        alert("Um novo card foi removido do sistema")
        window.location.href = '/'
    } else {
        alert("Tivemos problema na sua remoção")
    }
    }
})