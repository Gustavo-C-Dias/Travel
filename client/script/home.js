const Title = document.getElementsByTagName("h1");
const palavra = Title.title.innerHTML

var contador = 0
var digitar = setInterval (() => {
    console.log(contador)
    escrita = palavra.substring(0, contador)
    Title.title.innerHTML = ''
    Title.title.innerHTML = escrita
    contador++
    if(contador > palavra.length) clearInterval(digitar)
}, 400)


