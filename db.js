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

module.exports = connectDB