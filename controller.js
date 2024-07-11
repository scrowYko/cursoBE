const { client } = require('./db')
const bcryptjs = require('bcrypt')

const listUsers = async (req, res) => {
    res.send('lista de usuarios')
}

const createUser = async (req, res) => {
    try {
        const { nome, email, senha } = req.body
        const senhasegura = await bcryptjs.hashSync(senha, 10)
        const sql = `INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *`
        const data = await client.query(sql, [nome, email, senhasegura])
        res.status(201).json({ msg: 'O user foi criado com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Erro ao criar o user' })
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, email } = req.body
        const sql = `UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *`
        const data = await client.query(sql, [nome, email, id])
        res.status(201).json({ msg: 'O user foi atualizado com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Erro ao atualizar o user' })
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `DELETE FROM usuarios * WHERE id = $1`
        const data = await client.query(sql, [id])
        res.status(200).json({ msg: 'O user foi apagado com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Erro ao apagar o user' })
    }
}
const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM usuarios WHERE id = $1`
        const data = await client.query(sql, [id])
        res.status(201).json({ msg: 'O user foi retornado com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Erro ao retornar o user' })
    }
}


module.exports = { listUsers, createUser, updateUser, deleteUser, getUser }