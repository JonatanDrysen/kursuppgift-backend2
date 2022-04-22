const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
    complete: { type: Boolean, default: false },
    timestamp: { type: String, default: Date.now() }
})

const Todo = mongoose.model("Todo", TodoSchema)

const createTodo = async (author, text) => {
    const todo = new Todo({ author, text })
    await todo.save()
    return todo
}

const listTodos = async (userId) => {
    const todoList = await Todo.find({ author: mongoose.Types.ObjectId(userId) }).sort({ timestamp: -1 })
    console.log("TODOLIST: ", todoList)
    return todoList
}

const toggleDoneTodo = async (id) => {
    const todo = await Todo.findById(id)
    todo.complete = !todo.complete
    await todo.save()
    return todo
}

module.exports = {
    createTodo,
    listTodos,
    toggleDoneTodo
}