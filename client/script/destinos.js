const destino = document.getElementById("destino");
const form_cards = document.getElementById("inserir-card")
const form_lista = document.getElementById("inserir-lista")

form_cards.style.display = "none";
form_lista.style.display = "none";

destino.addEventListener("change", () => {
    switch (destino.value) {
      case 'Card':
        console.log("Aqui");
        form_cards.style.display = "flex";
        form_lista.style.display = "none";
        break;
      case 'Lista':
        console.log("Lá");
        form_cards.style.display = "none";
        form_lista.style.display = "flex";
        break;
    }
  });



  form_cards.addEventListener("submit", async ev => {
    ev.preventDefault()
    var request = await fetch("/cadastro-card", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cidade: form.cidade.value, estado: form.estado.value, url: form.url.value })
    })
    if(request.status == 200){
        window.location.href = '/'
    } else {
        alert("Tivemos problema no seu cadastro")
    }
})