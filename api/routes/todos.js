const express = require("express")
const router = express()

const { getNewTodo, getTodoList, getToggleDoneTodo } = require("../controllers/todos")

router.get("/", getTodoList)
router.post("/new", getNewTodo)
router.put("/:id", getToggleDoneTodo)

module.exports = router