//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Dash from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dash/>} />
            </Routes>
        </Router>
    );
}

export default App;
