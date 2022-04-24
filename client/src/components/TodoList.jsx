import { useState, useEffect } from 'react'

const API_URL = "http://localhost:3001/todos"

function TodoList() {
    const [ todos, setTodos ] = useState([])
    //console.log("TODOS: ", todos)

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        const token = localStorage.getItem("todotodo")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }

        fetch(API_URL, {
            headers: headers
        })
        .then(res => res.json())
        .then(data => {
           setTodos(data.todoList)
        })
    }

    return (
        <div className="App">
            <h2>Your tasks</h2>

            <div className="todos">
                {todos.filter((item) => !item.complete).map(todo => (
                    <div className="todo" key={ todo._id }>
                        <div className="todoText">{ todo.text }</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList