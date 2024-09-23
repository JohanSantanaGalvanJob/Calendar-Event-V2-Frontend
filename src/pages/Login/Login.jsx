import React, { useState } from "react";
import { API_URL } from "../../constants";
import "./Login.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            setToken(data.token);
            localStorage.setItem('token', data.token); // Guarda el token en localStorage
            console.log('User logged in:', data);
        } else {
            console.error('Error:', data.error);
        }
    };

    return (
        <div className="login-container">

            <h2 className='login-title'>Login Form</h2>

            <form className="login-form">

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                <p>No Account?</p>
                <button>Register</button>
            </form>
        </div>
    );
}

export default Login;
