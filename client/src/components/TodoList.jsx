import { useState, useEffect } from 'react'

const API_URL = "http://localhost:3001/todos"

const token = localStorage.getItem("todotodo")

const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
}

function TodoList() {
    const [ todos, setTodos ] = useState([])
    //console.log("TODOS: ", todos)

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        fetch(API_URL, {
            headers: headers
        })
        .then(res => res.json())
        .then(data => {
           setTodos(data.todoList)
        })
    }

    const toggleTodoStatus = async (_id) => {
        const data = await fetch(`${API_URL}/${_id}`, {
            method: "PUT",
            headers: headers
        })
        .then(res => res.json())

        setTodos(todos => todos.map(todo => {
            if (todo._id === data._id) {
                todo.complete = data.complete
            }
            return todo
        }))
        getTodos()
    }

    return (
        <div className="App">
            <h2>Your tasks</h2>

            <div className="todos">
                {todos.filter((item) => !item.complete).map(todo => (
                    <div className="todo" key={ todo._id }>
                        <div className="todoText">{ todo.text }</div> 
                        <button type="button" onClick={() => toggleTodoStatus(todo._id)}>mark as Done</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList