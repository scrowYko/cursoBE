const express = require('express')
const { Client } = require('pg')
require("dotenv").config()


const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})


const app = express()

const connectDB = async () => {
    client.connect().then(() => {
        console.log('Conexão Realizada')
    }).catch((error) => {
        console.error("Erro ao conectar", error)
    })
}
connectDB()

app.get('/test-api', function (req, res) {
    res.send('Nossa api ta funfando')
})


app.listen(8000)



















function filterEven(arr) {
    let filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        let testedNum = arr[i]
        if (testedNum % 2 == 0) {
            filteredArray.push(testedNum)
        }
    }
    return (filteredArray)
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
resultado = filterEven(arr)

function filtrarPares(array) {
    return array.filter(numero => numero % 2 == 0) // testando nova função array.prototype.filter()
}

