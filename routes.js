const express = require('express')
const router = express.Router()
const controller = require('./controller')
const { setup } = require('./db')

router.get("/", controller.listUsers)

router.post("/", controller.createUser)
router.post("/:id", controller.updateUser)
router.delete("/:id", controller.deleteUser)
router.get("/:id", controller.getUser)

router.get("/setup", setup)
module.exports = router