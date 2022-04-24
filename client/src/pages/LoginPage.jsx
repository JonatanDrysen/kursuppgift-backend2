import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = "http://localhost:3001/auth/login"

export default function LoginPage() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        const payload = { username, password }

        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.user.token
            console.log("DATA: ", data)
            //console.log("TOKEN: ", token)
            localStorage.setItem("todotodo", token)
        })
        navigate("/todos")
    }
    return (
        <>
            <h1>Log in to your account</h1>

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
                    <input type="submit" value="Log in" />
                </form>
            </div>
        </>
    )
}