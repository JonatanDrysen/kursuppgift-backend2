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

module.exports = {
    createTodo
}