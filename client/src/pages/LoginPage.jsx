import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

const API_URL = "http://localhost:3001"

export default function LoginPage() {
    const [ formData, setFormData ] = useState({
        username: "",
        password: ""
    })
    const { username, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
       const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { username, password }
         })

        const data = await response.json()
        console.log(data)
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
                    onChange={onChange}
                    />
                    <input
                     type="password" 
                     name="password" 
                     id="password" 
                     value={password} 
                     placeholder="Password"
                     onChange={onChange}
                    />
                    <input type="submit" value="Log in" />
                </form>
            </div>
        </>
    )
}