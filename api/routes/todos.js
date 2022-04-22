const express = require("express")
const router = express()

const {
    getNewTodo,
    getTodoList,
    getToggleDoneTodo,
    getDoneTodoList
} = require("../controllers/todos")

router.get("/", getTodoList)
router.get("/done", getDoneTodoList)
router.post("/new", getNewTodo)
router.put("/:id", getToggleDoneTodo)

module.exports = router