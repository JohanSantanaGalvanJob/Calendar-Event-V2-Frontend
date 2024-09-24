import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './pages/Register/Register';
import LoginForm from './pages/Login/Login';
import Events from './pages/Events/Events';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App;
