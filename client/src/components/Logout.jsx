import React from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = "http://localhost:3001/auth/logout"

const token = localStorage.getItem("todotodo")

const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
}

function Logout() {
    const navigate = useNavigate()

  const logoutUser = async () => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: headers
    })

    if (response.ok) {
        localStorage.removeItem("todotodo")
        navigate("/auth/login")
    }
  }

  return (
    <div className="logout">
      <button onClick={logoutUser}>Log out</button>
    </div>
  )
}

export default Logout