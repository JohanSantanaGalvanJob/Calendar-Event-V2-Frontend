import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../constants";
import "./Register.css"

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState(null);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [, setToken] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name, last_name, email, password, birthdate }),
        });
        console.log(response);
        const data = await response.json();
        if (response.ok) {
            setToken(data.token);
            localStorage.setItem('token', data.token); // Guarda el token en localStorage
            console.log('User logged in:', data);
            navigate('/events');
        } else {
            console.error('Error:', data.error);
        }
    };

    return (
        <div className="register-container">

            <h2 className='register-title'>Register Form</h2>

            <form className="register-form">

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="Johan"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="lastname">Last Name</label>
                <input
                    type="text"
                    placeholder="Santana"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Hola1234"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="birhdate">Birthdate</label>
                <input
                    type="date"
                    placeholder="Birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <button onClick={handleRegister}>Register</button>

                <p>Already Logged?</p>
                <button>Login</button>

            </form>



        </div>
    );
}

export default Register;
