import React, { useState } from 'react'

const API_URL = "http://localhost:3001/users"

export default function RegisterPage() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        const payload = { username, password }

        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <>
            <h1>Create a new account</h1>

            <div className="form">
                <form onSubmit={onSubmit}>
                    <input
                    type="text"
                    name="username" 
                    id="username" 
                    value={username} 
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                    />
                    <input
                     type="password" 
                     name="password" 
                     id="password" 
                     value={password} 
                     placeholder="Password"
                     onChange={e => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Create account" />
                </form>
            </div>
        </>
    )
}