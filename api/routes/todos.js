const express = require("express")
const router = express()

const { getNewTodo } = require("../controllers/todos")

router.post("/new", getNewTodo)

module.exports = router