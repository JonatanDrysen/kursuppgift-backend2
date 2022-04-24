import { useState } from 'react'

const API_URL = "http://localhost:3001/todos/new"

function NewTodo() {
    const [ text, setText ] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const token = localStorage.getItem("todotodo")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const payload = { text } 
        fetch(API_URL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
    }

    return (
        <div className="newTodo">
            <h2>Create a new todo to do</h2>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    value={text} 
                    placeholder="What must be done?"
                    onChange={e => setText(e.target.value)}
                />
                <input type="submit" value="Pledge your soul" />
            </form>
        </div>
    )
}

export default NewTodo