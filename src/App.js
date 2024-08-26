import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const App = () => {
    return (
        <Router>

        <div>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </div>
        </Router >
    )
}

export default App
