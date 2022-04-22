import React from "react"
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import CreateAccountPage from ("../pages/CreateAccountPage")

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todos" element={ <HomePage /> } />
        <Route path="/auth/login" element={ <LoginPage /> } />
        <Route path="/users" element={ <CreateAccountPage /> } />
      </Routes>
    </div>
  );
}

export default App;
