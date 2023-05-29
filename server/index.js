
    // Server.post("/Login", async (req, res) => {
    //     const {login, senha} = req.body
    //     const token = await Admin.get_Token(login, senha)

    //     if(token){
    //         res.statusCode = 200
    //         res.json({token})
    //         return

    //     } else {
    //         res.statusCode = 401
    //         res.json("Os seus dados informados não conferem")
    //     }
    // })


const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

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

app.listen(3500);