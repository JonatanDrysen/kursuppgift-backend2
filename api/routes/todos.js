const express = require("express")
const router = express()

const { getNewTodo, getTodoList } = require("../controllers/todos")

router.get("/", getTodoList)
router.post("/new", getNewTodo)

module.exports = router