const { createTodo, listTodos, toggleDoneTodo } = require("../models/Todo")

const getNewTodo = async (req, res) => {
    const { text } = req.body
    const userId = req.user.userId
    console.log("TEXT:", text, "USERID:", userId)
    const newTodo = await createTodo(userId, text)

    res.status(201).json({ newTodo })
}

const getTodoList = async (req, res) => {
    const todoList = await listTodos(req.user.userId)
    res.json({ todoList })
}

const getToggleDoneTodo = async (req, res) => {
    const todo = await toggleDoneTodo(req.params.id)
    console.log("PARAMS: ", req.params.id, "TODO: ", todo)

    res.json(todo)
}

module.exports = {
    getNewTodo,
    getTodoList,
    getToggleDoneTodo
}