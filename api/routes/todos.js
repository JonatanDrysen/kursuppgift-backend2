const express = require("express")
const router = express()

const { requireLogin } = require("../controllers/auth")

const {
    getNewTodo,
    getTodoList,
    getToggleDoneTodo,
    getDoneTodoList
} = require("../controllers/todos")

router.get("/", requireLogin, getTodoList)
router.get("/done", requireLogin, getDoneTodoList)
router.post("/new", requireLogin, getNewTodo)
router.put("/:id", requireLogin, getToggleDoneTodo)
router.put("/done/:id", requireLogin, getToggleDoneTodo)

module.exports = router