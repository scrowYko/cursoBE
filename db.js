const { Client } = require('pg')
require("dotenv").config()

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})


const connectDB = async () => {
    client.connect().then(() => {
        console.log('Conexão Realizada')
    }).catch((error) => {
        console.error("Erro ao conectar", error)
    })
}

const setup = async (req, res) => {
    try {
        const data = await client.query('CREATE TABLE usuarios ( id SERIAL PRIMARY KEY, nome VARCHAR(80), email VARCHAR(50), senha VARCHAR(100) )')
        res.status(200).json({msg:'A TABELA FOI CRIADA'})
    } catch (error) {
        console.log('deu erro ao criar a tabela')
        res.status(500)
    }
}

module.exports = { connectDB , setup, client}