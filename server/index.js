const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('../database/data')

const app = express()
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/pages/home.html'));
})

app.get('/passeios', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/passeios.html'));
})

app.get('/cidades', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/cidades.html'));
})

app.get('/planos', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/planos.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/login.html'));
})

app.post('/login', async (req, res) => {
    try {
        const dados = await db.consultarUsuario(req.body.email, req.body.senha)
        res.json(dados)
    } catch (e) {
      console.log(e)
    }
})

app.post('/cadastro-usuario', async (req, res)=> {
    try {
        const dados = await db.adicionarUsuario(req.body.nome, req.body.email, req.body.senha)
        console.log(dados)
        res.json(dados)
    } catch (e) {
      console.log(e)
    }
})

app.get('/inserir', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/inserir.html'));
})

app.get('/dados-cards', async (req, res) => {
    try {
        const dados = await db.consultarLugar()
        res.json(dados)
    } catch (e) {
      console.log(e)
    }
  });

app.listen(3500, () => {
    console.log("Server on...")
});