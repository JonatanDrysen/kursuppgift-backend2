import React from "react"
import { Route, Routes } from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

export default function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={ <LoginPage /> } />
      <Route path="/users" element={ <RegisterPage /> } />
    </Routes>
  )
}
