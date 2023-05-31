async function get_dados() {
    var request = await fetch("/dados-lista", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })

    var lugares = await request.json()
    return lugares;
}

async function main() {
    
    var lugares = await get_dados()
    const lista = document.getElementById("outros_destinos")

    lugares.forEach(element => {
        lista.innerHTML += `<li>${element.cidade}</li>`
    })
}

main();