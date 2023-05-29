const back = document.getElementById("back")
const next = document.getElementById("next")
const card_1 = document.getElementById("card-1")
const card_2 = document.getElementById("card-2")
const card_3 = document.getElementById("card-3")

index_card1 = 0
index_card2 = 1
index_card3 = 2

var lugares = [
    {url:"../img/Cards/Sao_Paulo.png", cidade:"São Paulo", estado:"São Paulo"},
    {url:"../img/Cards/Florianopolis.png", cidade:"Florianópolis", estado:"Santa Catarina"},
    {url:"../img/Cards/Petropolis.png", cidade:"Petrópolis", estado:"Rio de Janeiro"},
    {url:"../img/Cards/Cataratas.png", cidade:"Foz do Iguaçu", estado:"Paraná"},
    {url:"../img/Cards/Chapada_Diamantina.png", cidade:"Chapada Diamantina", estado:"Bahia"},
    {url:"../img/Cards/Gramado.png", cidade:"Gramado", estado:"Rio Grande do Sul"},
    {url:"../img/Cards/Curitiba.png", cidade:"Curitiba", estado:"Paraná"},
    {url:"../img/Cards/Rio_Janeiro.png", cidade:"Rio de Janeiro", estado:"Rio de Janeiro"},
]

next.onclick = () => {
    if(index_card3 == lugares.length-1){
        index_card1 = index_card2
        index_card2 = index_card3
        index_card3 = 0
    } else {
        index_card1 = index_card2
        index_card2 = index_card3
        index_card3 ++
    }
    card_2.innerHTML = `<img src=${lugares[index_card2].url}></img>
                        <h3 class="subtitle">${lugares[index_card2].cidade}</h2>
                        <p>${lugares[index_card2].estado}</p>`

    card_1.innerHTML = `<img src=${lugares[index_card1].url}></img>
                        <h3 class="subtitle">${lugares[index_card1].cidade}</h2>
                        <p>${lugares[index_card1].estado}</p>`

    card_3.innerHTML = `<img src=${lugares[index_card3].url}></img>
                        <h3 class="subtitle">${lugares[index_card3].cidade}</h2>
                        <p>${lugares[index_card3].estado}</p>`
}

back.onclick = () => {
    if(index_card1 == 0){
        index_card3 = index_card2
        index_card2 = index_card1
        index_card1 = lugares.length-1
    } else {
        index_card3 = index_card2
        index_card2 = index_card1
        index_card1 --
    }

    card_2.innerHTML = `<img src=${lugares[index_card2].url}></img>
                        <h3 class="subtitle">${lugares[index_card2].cidade}</h2>
                        <p>${lugares[index_card2].estado}</p>`

    card_1.innerHTML = `<img src=${lugares[index_card1].url}></img>
                        <h3 class="subtitle">${lugares[index_card1].cidade}</h2>
                        <p>${lugares[index_card1].estado}</p>`
    
    card_3.innerHTML = `<img src=${lugares[index_card3].url}></img>
                        <h3 class="subtitle">${lugares[index_card3].cidade}</h2>
                        <p>${lugares[index_card3].estado}</p>`
}
